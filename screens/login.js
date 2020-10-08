import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { AUTHORIZATION_URL, RESPONSE_TYPE, CLIENT_ID, CALLBACK } from 'react-native-dotenv'

const CALLBACK_ENCODED = encodeURIComponent(CALLBACK);

const authUrl = `${AUTHORIZATION_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_ENCODED}`;

export default class Login extends React.Component {

  render() {
    return (
      <View>
        <WebView
          source={{ uri: authUrl }}
          javaScriptEnabled
          startInLoadingState
        />
      </View>
    )
  }

}
