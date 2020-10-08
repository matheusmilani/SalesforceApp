import React, { Component } from 'react';
import * as querystring from 'query-string';
import {
  View,
  Linking,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import Login from './screens/login';
import Home from './screens/home';

export default class App extends Component {

  state = {
    loggedIn: false,
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handleOauthCallback);
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOauthCallback);
  }

  handleOauthCallback = async (event) => {
    const loginInfo = querystring.parse(event.url.split('#')[1]);
    await AsyncStorage.setItem('@df17:instanceUrl', loginInfo.instance_url);
    await AsyncStorage.setItem('@df17:accessToken', loginInfo.access_token);
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {!this.state.loggedIn && <Login />}
        {this.state.loggedIn && <Home/>}
      </View>
    );
  }
}
