/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button,Switch,Image} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  constructor(Props)
  {
    super(Props);
    this.state={fname:'Enter UserName'};
    
  }

   state ={
     switchValue:false
   };


   update(event)
   {
     this.setState
     (
       {
         fname:event.target.value
       }
     )

   }


   // submit button functionality
    search()
    {
      alert('sumbittted successfully');
      var promise =  fetch('http://10.0.2.2:4001/users')
      promise.then(response => response.json()).then(users => console.log(JSON.stringify(users)))
     
    }

    //save function 
    save()
    {
      alert('sumbittted successfully');
     fetch('http://10.0.2.2:4001/users',{
        method:'POST',
        body:JSON.stringify(this.create),
        headers:{ 'content-type':'application/json' }
    })
  }


  //React native contact check
  permissioncheck()
  {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      }
    ).then(() => {
      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
          alert.log(JSON.stringify(contacts))
          // error
        } else {
          // contacts returned in Array
         alert.log(JSON.stringify(contacts));
        }
      })
    })
   }


  
  render() {

    return (
      <View style={styles.container}>
        <TextInput  value ={this.state.fname}style={styles.input}  onChange={this.update = this.update.bind(this)}></TextInput>
        <TextInput style={styles.input}></TextInput>
        <Button title="Login" onPress={this.search= this.search.bind(this)} backgroundColor="#F5FCFF" />  
        <Button title="Save" onPress={this.save= this.save.bind(this)} backgroundColor="#F5FCFF" />  
        <Button title="PermissionCheck" onPress={this.permissioncheck= this.permissioncheck.bind(this)} backgroundColor="#F5FCFF" />  
       
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
  input: {
    width:200 , height:50,borderColor:"#b39afd" , borderWidth:2, margin:5,
    padding:5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:"#FFFFFF",
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
