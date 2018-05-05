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
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Pin Code" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Locality" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="City" />
            </Item>
            <Item underline style={{ borderBottomWidth: 0 }}>
              <Input style={{ paddingLeft: 0 }} placeholder="State" />
            </Item>
          </Card>
          <Card style={{ paddingHorizontal: 10 }}>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Name" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Address" />
            </Item>
            <Item underline>
              <Input style={{ paddingLeft: 0 }} placeholder="Mobile No." />
            </Item>
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
