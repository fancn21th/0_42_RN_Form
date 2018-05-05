import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../../Store'
import SimpleForm from '../SimpleForm'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <SimpleForm></SimpleForm>
      </Provider>
    );
  }
}


