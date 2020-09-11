/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Form } from 'formik';
import { FormEvent } from 'react';
import { SimpleFormHOC, SimpleElementProps } from '../SimpleFormHOC/SimpleFormHOC';

const simpleTextAreaStyle = css({
  fontSize: '1rem',
  border: 'none',
  marginBottom: '1px',
  '&:hover,&:focus': {
    borderBottom: '1px solid black',
    marginBottom: 0,
  },
  width: '100%',
})

interface TextAreaProps {
  values: object,
  handleChange: (e: FormEvent<HTMLTextAreaElement>) => void,
  fieldName: string,
}

export const TextArea: React.FC<TextAreaProps> = ({ values, handleChange, fieldName }) => (
  <Form>
    <textarea
      css={simpleTextAreaStyle}
      name={fieldName}
      onChange={handleChange}
      value={values[fieldName]}
    />
</Form>
);

export const SimpleTextArea: React.FC<SimpleElementProps> = ({fieldName, defaultValue, value, validator, onChange }) => {
  return <SimpleFormHOC children={TextArea} fieldName={fieldName} defaultValue={defaultValue} value={value} validator={validator} onChange={onChange} />;
}