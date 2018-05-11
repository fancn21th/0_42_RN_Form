import React from 'react'
import { Field } from 'redux-form'
import { Picker, Item, Icon, Text } from 'native-base'

const renderPicker = ({ input, placeholder, source , meta:{ touched, error, warning } }) => {
  const { value, onChange } = input
  let hasError = false

  if(touched && error) {
    hasError = true;
  }

  const onValueChange = (selectedValue) => onChange(selectedValue)

  return (
    <Item
      underline
      success={touched && !hasError}
      error={hasError}
      style={{
        flex:1,
      }}
    >
      <Picker
        {...input}
        mode="dropdown"
        placeholder={placeholder}
        iosIcon={<Icon name="ios-arrow-down-outline" />}
        textStyle={{ color: "#5cb85c" }}
        itemStyle={{
          backgroundColor: "#d3d3d3",
          marginLeft: 0,
          paddingLeft: 10
        }}
        itemTextStyle={{
          color: '#788ad2'
        }}
        style={{
          flex:1,
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
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  )
}

const PickerField = ({ name, placeholder, source }) => (
  <Field
    name={name}
    placeholder={placeholder}
    component={renderPicker}
    source={source}
  />
)

export default PickerField
