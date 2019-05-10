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
    this.state={
      fname:'',
      fphone:''
    };

  }
  

  //React native contact check
  addNewContactMethod()
  {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.'
      }
    ).then(() => {

      var newPerson = {
        emailAddresses: [{
          label: "work",
          email: "ramasamy.vcp@gmail.com",
        }],
        familyName: "M",
        givenName: this.state.fname,
        phoneNumbers: [{
          id:"366",
          label: "work",
          number:this.state.fphone,
        }],
      }
      Contacts.addContact(newPerson, (err) => {
        if (err) throw err;
        // save successful
        alert('Added successfully');

      })

      Contacts.getAll((err, contacts) => {
        if (err === 'denied'){
         console.log(JSON.stringify(contacts));
          // error
        } else {
          // contacts returned in Array
         console.log(JSON.stringify(contacts));
        }
      })
    })
   }

    // submit button functionality
    search()
    {
      
      var promise =  fetch('http://10.0.2.2:4001/users')
      promise.then(response => response.json()).then(users => console.log(JSON.stringify(users)))
     
    }

    //save function 
    save()
    {
      fetch('http://10.0.2.2:4001/users',{
         method:'POST',
         body:JSON.stringify(this.create),
      headers:{ 'content-type':'application/json' }
     })

  }

  
  render() {

    return (
      <View style={styles.container}>
        <TextInput
        fieldKey="fname" 
        value ={this.state.fname}
        style={styles.input}  
        placeholder="Enter UserName" 
        maxLength={15}
        onChangeText={(fname) => this.setState({fname})}
        />

        
        <TextInput 
        fieldKey="fphone" 
        value ={this.state.fphone}
        style={styles.input}  
        placeholder="Enter PhoneNumber" 
        keyboardType="numeric"
        maxLength={10}
        onChangeText={(fphone) => this.setState({fphone})}
        />

        <Button 
      
        title="Login" 
        onPress={this.search= this.search.bind(this)} 
        style={styles.button_style}
        backgroundColor="#F5FCFF" />  

        <Button
         title="Save" 
         style={styles.button_style}
        onPress={this.save= this.save.bind(this)} 
        backgroundColor="#F5FCFF" />  

        <Button 
        title="addNewContactMethod"
        style={styles.button_style}
        onPress={this.addNewContactMethod= this.addNewContactMethod.bind(this)} 
         backgroundColor="#F5FCFF" />  
       
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
    marginBottom:10,
    height:20
  },
  input: {
    width:200,
    height:50,
    borderColor:"#b39afd" ,
     borderWidth:2, margin:20,
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
  },
  button_style: {
    marginBottom: 10,
    padding: 10,
  }
});
