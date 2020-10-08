import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends Component {

  state = {
    accessToken: null,
    instanceUrl: null,
  }

  async componentDidMount() {
    this.setState({
      instanceUrl: await AsyncStorage.getItem('@df17:instanceUrl'),
      accessToken: await AsyncStorage.getItem('@df17:accessToken'),
    });
  }

  render() {
    return (
      <View>
        <Text>Logged in!</Text>
        <View>
          <Text>Access token</Text>
          <Text>{this.state.accessToken}</Text>
        </View>
      </View>
    );
  }
}
