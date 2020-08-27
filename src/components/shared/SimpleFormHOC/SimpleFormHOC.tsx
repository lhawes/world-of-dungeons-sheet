/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Formik } from 'formik';
import { useCallback, FormEvent, memo, useMemo } from 'react';

export interface SimpleFormHOCProp {
  defaultValue: any,
  value: unknown,
  validator: (v: string) => boolean,
  fieldName: string,
  onChange: (v:any) => void,
  children: (props: object) => any,
}

export const SimpleFormHOC: React.FC<SimpleFormHOCProp> = memo(({ children, fieldName, defaultValue, value, validator, onChange }) => {
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
    </Formik>
  );
});

export type SimpleElementProps = Omit<SimpleFormHOCProp, 'children'>;