import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*

  VÁRIAS ALTERAÇÕES NO PROJETO PARA QUE FUNCIONE
  -ANDROID
  <uses-permission android:name="android.permission.INTERNET" /> PERMISSÃO MANIFEST
  <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/> DENTRO DO APPLICATION DO MANIFEST
  <string name="facebook_app_id">AQUI COLOCA O ID</string> DENTRO DO STRINGS.XML
  mainActivity.java e mainApplication.java pode copiar igual, eles estão alterados aqui.

  -Ainda tem que configurar a aplicação do facebook na página developers.facebook.com

*/


// INICIO - FACEBOOK LOGIN - XXXFACEBOOKLOGIN
const FBSDK = require('react-native-fbsdk');

const {
  LoginButton,
  AccessToken
} = FBSDK;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          readPermissions={["email","public_profile"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + result.error);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString());
                    console.log(data);
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
  }
});

// TÉRMINO - FACEBOOK LOGIN


export default class facebookLogin extends Component {

  render() {
    return (
      <View>
        <Text>Welcome to the Facebook SDK for React Native!</Text>
        <Login /> //FACEBOOK LOGIN XXXFACEBOOKLOGIN
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('facebookLogin', () => facebookLogin);
