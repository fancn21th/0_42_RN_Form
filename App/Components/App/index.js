import React, {Component} from 'react';
import {
  Container,
  Content,
  H1,
} from 'native-base';
import {Provider} from 'react-redux';
import configureStore from '../../Store'
import Style from './style';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Container>
          <Content>
            <H1>Hello</H1>
          </Content>
        </Container>
      </Provider>
    );
  }
}


