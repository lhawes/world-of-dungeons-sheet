/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Formik, Form } from 'formik';
import { useCallback, FormEvent, memo, useMemo } from 'react';

interface SimpleFormProp {
  defaultValue: any,
  value: any,
  validator: (v: string) => boolean,
  fieldName: string,
  onChange: (v:any) => void,
  children: (props: object) => any,
}

const simpleInputStyle = css({
  fontSize: '1rem',
  border: 'none',
  marginBottom: '1px',
  '&:hover,&:focus': {
    borderBottom: '1px solid black',
    marginBottom: 0,
  },
})

export const SimpleFormProps: React.FC<SimpleFormProp> = memo(({ children, fieldName, defaultValue, value, validator, onChange }) => {
    const validate = useCallback((submissionValue) => {
      if (validator(submissionValue)) {
        onChange(submissionValue);
      } else {
        console.log('not valid', fieldName, submissionValue)
      }
    }, [validator, fieldName])

    const handleChange = (e: FormEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      validate(e.currentTarget.value);
    };

    const handleSubmit = useCallback((eventValue: object) => {
      validate(eventValue[fieldName]);
    }, [fieldName]);

    const initValues = useMemo(() => ({
      [fieldName]: value ?? defaultValue,
    }),[fieldName, value, defaultValue]);

    return (
      <Formik 
        enableReinitialize={true}
        initialValues={initValues}
        onSubmit={handleSubmit}
      >
      { ({ values }) => children({ values, handleChange, fieldName }) }
      {/* { ({ 
          values,
        }) => (
          <Form>
            <input
              css={simpleInputStyle}
              type="text"
              name={fieldName}
              onChange={handleChange}
              value={values[fieldName]}
            />
          </Form>
      )} */}
      </Formik>
    );
});

interface InputProps {
  values: object,
  handleChange: (e: FormEvent<HTMLInputElement>) => void,
  fieldName: string,
}

interface TextAreaProps extends Omit<InputProps, 'handleChange'> {
  handleChange:(e: FormEvent<HTMLTextAreaElement>) => void,
}

export const Input: React.FC<InputProps> = ({ values, handleChange, fieldName }) => (
  <Form>
    <input
      css={simpleInputStyle}
      type="text"
      name={fieldName}
      onChange={handleChange}
      value={values[fieldName]}
    />
</Form>
);

export const TextArea: React.FC<TextAreaProps> = ({ values, handleChange, fieldName }) => (
  <Form>
    <textarea
      css={simpleInputStyle}
      name={fieldName}
      onChange={handleChange}
      value={values[fieldName]}
    />
</Form>
);

type SimpleElementProps = Omit<SimpleFormProp, 'children'>;

export const SimpleInput: React.FC<SimpleElementProps> = ({fieldName, defaultValue, value, validator, onChange }) => {
  return <SimpleFormProps children={Input} fieldName={fieldName} defaultValue={defaultValue} value={value} validator={validator} onChange={onChange} />;
}

export const SimpleTextArea: React.FC<SimpleElementProps> = ({fieldName, defaultValue, value, validator, onChange }) => {
  return <SimpleFormProps children={TextArea} fieldName={fieldName} defaultValue={defaultValue} value={value} validator={validator} onChange={onChange} />;
}