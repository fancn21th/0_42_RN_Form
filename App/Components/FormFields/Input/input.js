import React from 'react'
import { Field } from 'redux-form'
import { Input, Item, Text } from 'native-base'
import PropTypes from 'prop-types'

const renderComponent = ({
                           otherProps,
                           input,
                           meta: { touched, error },
                         }) => {
  let hasError = false

  if (touched && error) {
    hasError = true
  }

  return (
    <Item
      underline
      success={touched && !hasError}
      error={hasError}
      style={{
        flex: 1,
      }}
    >
      <Input
        {...input}
        {...otherProps}
        // style={{ paddingLeft: 0 }}
      />
      {hasError && <Text>{error}</Text>}
    </Item>
  )
}

renderComponent.propTypes = {
  input: PropTypes.shape({}).isRequired,
  otherProps: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
}

const InputField = ({ name, validate, ...otherProps }) => (
  <Field
    name={name}
    validate={validate}
    component={renderComponent}
    otherProps={otherProps}
  />
)

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  validate: PropTypes.arrayOf(PropTypes.func),
}

InputField.defaultProps = {
  validate: undefined,
}

export default InputField
