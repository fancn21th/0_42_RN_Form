import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import { InputField, PickerField } from '../FormFields/Input'
import {
  Input,
  Picker,
  Container,
  Button,
  Content,
  Card,
  Item,
  Text,
  Icon,
} from "native-base";

const validate = values => {
  const error = {};
  error.name = ''
  if(!values.name){
    error.name = 'required';
  }
  return error;
};

const submit = (values) => {
  console.log(values);
}

const countries = [
  {
    text: 'China',
    value: 'china',
  },
  {
    text: 'United State Of American',
    value: 'usa',
  },
  {
    text: 'United Kingdom',
    value: 'uk',
  },
  {
    text: 'Japan',
    value: 'japan',
  },
]

class SimpleForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedValue: '',
    }
  }

  onValueChange(value) {
    this.setState({
      selectedValue: value,
    })
  }

  render() {
    const { handleSubmit, pristine, reset } = this.props;

    return (
      <Container>
        <Content
          style={{ marginBottom: 50, marginTop: 100 }}
          padder
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          {/* Redux Form Fields */}

          <Text style={{ fontSize: 12, color: "#555", fontWeight: "500" }}>
            Redux Form Fields{" "}
          </Text>

          <Card style={{ paddingHorizontal: 10 }}>
            <InputField
              name="name"
              placeholder="Name"
            />
            <PickerField
              name="hobby"
              placeholder="Hobby"
              source={countries}
            />
          </Card>

          {/* Common Native Base Components */}

          <Text style={{ fontSize: 12, color: "#555", fontWeight: "500" }}>
            Common Native Base Components{" "}
          </Text>

          <Card style={{ paddingHorizontal: 10 }}>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Pin Code" />
            </Item>
            <Picker
              mode="dropdown"
              placeholder='Country'
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              textStyle={{ color: "#5cb85c" }}
              itemStyle={{
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ paddingLeft: 0, width: undefined }}
              selectedValue={this.state.selectedValue}
              onValueChange={this.onValueChange}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Card>
          <Button
            primary
            block
            disabled={pristine}
            onPress={handleSubmit(submit)}
            style={{ marginTop: 10, marginBottom: 15 }}
          >
            <Text> SAVE </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default reduxForm({
  form: 'test',
  validate
})(SimpleForm);
