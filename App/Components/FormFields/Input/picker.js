import React from 'react'
import { Field } from 'redux-form'
import { Picker, Item, Icon, Text } from 'native-base'
import PropTypes from 'prop-types'

const renderComponent = ({
                           otherProps,
                           source,
                           onChangeValue,
                           input,
                           meta: { touched, error },
                         }) => {
  const { value, onChange } = input
  let hasError = false

  if (touched && error) {
    hasError = true
  }

  const onValueChange = (selectedValue) => {
    onChange(selectedValue)
    onChangeValue(selectedValue)
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
      <Picker
        {...input}
        {...otherProps}
        mode="dropdown"
        iosIcon={<Icon name="ios-arrow-down-outline" />}
        textStyle={{ color: '#5cb85c' }}
        itemStyle={{
          backgroundColor: '#d3d3d3',
          marginLeft: 0,
          paddingLeft: 10,
        }}
        itemTextStyle={{
          color: '#788ad2',
        }}
        style={{
          flex: 1,
          paddingLeft: 0,
        }}
        selectedValue={value}
        onValueChange={onValueChange}
      >
        {
          source.map(item => (
            <Picker.Item key={item.value} label={item.text} value={item.value} />
          ))
        }
      </Picker>
      {hasError && <Text>{error}</Text>}
    </Item>
  )
}

renderComponent.propTypes = {
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({}).isRequired,
  otherProps: PropTypes.shape({}).isRequired,
  onChangeValue: PropTypes.func.isRequired,
  source: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
}

const PickerField = ({
                       name,
                       source,
                       onChangeValue,
                       ...otherProps
                     }) => (
  <Field
    name={name}
    component={renderComponent}
    onChangeValue={onChangeValue}
    source={source}
    otherProps={otherProps}
  />
)

PickerField.propTypes = {
  name: PropTypes.string.isRequired,
  source: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  onChangeValue: PropTypes.func,
}

PickerField.defaultProps = {
  onChangeValue: () => {},
}


export default PickerField
