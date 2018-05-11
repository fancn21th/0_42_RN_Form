import React from 'react'
import { Field } from 'redux-form'
import { Picker, Item, Icon, Text } from 'native-base'

const renderPicker = ({ input, placeholder, meta:{ touched, error, warning } }) => {
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
        itemTextStyle={{ color: '#788ad2' }}
        style={{ paddingLeft: 0, width: undefined }}
        // selectedValue={this.state.selected}
        // onValueChange={this.onValueChange.bind(this)}
      >
        <Picker.Item label="Wallet" value="key0" />
        <Picker.Item label="ATM Card" value="key1" />
        <Picker.Item label="Debit Card" value="key2" />
        <Picker.Item label="Credit Card" value="key3" />
        <Picker.Item label="Net Banking" value="key4" />
      </Picker>
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  )
}

const PickerField = ({ name, placeholder }) => (
  <Field
    name={name}
    placeholder={placeholder}
    component={renderPicker}
  />
)

export default PickerField
