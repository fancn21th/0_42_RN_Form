import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { CheckBox, Item, Text, Body } from 'native-base'

class EnhancedCheckBox extends Component {
  constructor(props) {
    super(props)
    const { input: { initial } } = this.props
    this.state = {
      hasError: false,
      checkValue: initial,
    }
  }

  onValueChange() {
    const newValue = !this.state.checkValue
    const { input: { onChange } } = this.props
    this.setState({
      checkValue: newValue
    })
    onChange(newValue)
  }

  render() {
    const {
      otherProps,
      input,
      meta: { touched, error },
    } = this.props

    const { label } = otherProps

    if (touched && error) {
      this.setState({
        hasError: true,
      })
    }

    return (
      (
        <Item
          underline
          success={touched && !this.state.hasError}
          error={this.state.hasError}
          style={{
            flex: 1,
          }}
        >
          <CheckBox
            {...input}
            {...otherProps}
            checked={this.state.checkValue}
            onPress={this.onValueChange.bind(this)}
          />
          {this.state.hasError && <Text>{error}</Text>}
          {!this.state.hasError && (
            <Body>
            <Text>{label}</Text>
            </Body>
          )}
        </Item>
      )
    )
  }
}

EnhancedCheckBox.propTypes = {
  input: PropTypes.shape({}).isRequired,
  otherProps: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
}

const CheckboxField = ({ name, ...otherProps }) => (
  <Field
    name={name}
    component={EnhancedCheckBox}
    otherProps={otherProps}
  />
)

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
}

CheckboxField.defaultProps = {
  validate: undefined,
}

export default CheckboxField
