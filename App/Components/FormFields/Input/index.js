import React from 'react';
import { Field } from 'redux-form';
import { Input, Item, Text } from 'native-base';

const renderInput = ({ input, placeholder, meta:{ touched, error, warning } }) => {
  let hasError = false;

  if(touched && error) {
    hasError = true;
  }

  return (
    <Item
      underline
      success={touched && !hasError}
      error={hasError}
    >
      <Input
        {...input}
        style={{ paddingLeft: 0 }}
        placeholder={placeholder}
      />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  )
}

const InputField = ({ name, placeholder }) => (
  <Field
    name={name}
    placeholder={placeholder}
    component={renderInput}
  />
)

export default InputField
