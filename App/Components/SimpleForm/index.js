import React, { Component } from "react";
import {
  Input,
  Container,
  Button,
  Content,
  Card,
  Item,
  Text,
} from "native-base";

class SimpleForm extends Component {
  render() {
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
            style={{ marginTop: 10, marginBottom: 15 }}
          >
            <Text> SAVE </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
export default SimpleForm;
