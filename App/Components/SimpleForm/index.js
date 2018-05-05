import React, { Component } from "react";
import { reduxForm } from 'redux-form';
import InputField from '../FormFields/Input'
import {
  Input,
  Container,
  Button,
  Content,
  Card,
  Item,
  Text,
} from "native-base";

const validate = values => {
  const error = {};
  error.name = ''
  if(!values.name){
    error.name = 'required';
  }
  return error;
};

class SimpleForm extends Component {
  render() {
    const { handleSubmit, pristine, reset } = this.props;
    return (
      <Container>
        <Content
          style={{ marginBottom: 50, marginTop: 100 }}
          padder
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <Text style={{ fontSize: 12, color: "#555", fontWeight: "500" }}>
            ADD NEW ADDRESS{" "}
          </Text>
          <Card style={{ paddingHorizontal: 10 }}>
            <InputField
              name="name"
              placeholder="Name"
            />
            <InputField
              name="hobby"
              placeholder="Hobby"
            />
          </Card>
          <Card style={{ paddingHorizontal: 10 }}>
            <InputField
              name="address"
              placeholder="Address"
            />
            <InputField
              name="phone"
              placeholder="Phone"
            />
          </Card>
          <Button
            primary
            block
            disabled={pristine}
            onPress={reset}
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
