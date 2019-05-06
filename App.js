/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Switch,Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

   state ={
     switchValue:false
   };

  
  render() {

    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TextInput style={styles.TextInput}>{TextInput}</TextInput>
        <Button   
        title="Click Me!"
        style={{width: 100, height: 100, backgroundColor: 'skyblue'}}
        />
        <Switch value={this.state.switchValue}
        onValueChange ={(switchValue)=> this.setState({switchValue})}></Switch>
       

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
    height:20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:"FFFFFFF",
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TextInput: {
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: '#fff'
  }
});
