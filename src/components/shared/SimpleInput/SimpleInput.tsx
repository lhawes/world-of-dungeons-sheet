/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Form } from 'formik';
import { FormEvent } from 'react';
import { SimpleFormHOC, SimpleElementProps } from '../SimpleFormHOC/SimpleFormHOC';

const simpleInputStyle = css({
  fontSize: '1rem',
  border: 'none',
  marginBottom: '1px',
  '&:hover,&:focus': {
    borderBottom: '1px solid black',
    marginBottom: 0,
  },
});

const simpleAttributeInputStyle = css({
  width: '2rem',
  height: '2rem',
  fontSize: '2rem',
  textAlign: 'center',
  verticalAlign: 'middle',
  border: 'none',
});

interface InputProps {
  values: object,
  handleChange: (e: FormEvent<HTMLInputElement>) => void,
  fieldName: string,
}

export const Input: React.FC<InputProps> = ({ values, handleChange, fieldName }) => {
  return (
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
}

export const AttributeInput: React.FC<InputProps> = ({ values, handleChange, fieldName }) => {
  return (
    <Form>
      <input
        css={simpleAttributeInputStyle}
        type="text"
        name={fieldName}
        onChange={handleChange}
        value={values[fieldName]}
      />
  </Form>
  );
}

export const SimpleInput: React.FC<SimpleElementProps> = ({fieldName, defaultValue, value, validator, onChange }) => {
  return <SimpleFormHOC children={Input} fieldName={fieldName} defaultValue={defaultValue} value={value} validator={validator} onChange={onChange} />;
}

export const SimpleAttributeInput: React.FC<SimpleElementProps> = ({fieldName, defaultValue, value, validator, onChange }) => {
  return <SimpleFormHOC children={AttributeInput} fieldName={fieldName} defaultValue={defaultValue} value={value} validator={validator} onChange={onChange} />;
}
