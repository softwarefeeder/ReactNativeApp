
import React from 'react';
import {View,Text} from 'react-native'

 
export default class PracticeClass extends React.Component
{

    constructor(props)
    {
        super(this.props)
         this.state ={mystate:"Hi"}
    }

    updateState= () => {
         this.setState({
             mystate:"Hello"
         })
    }

    render()
    {
        return( 
                <View>
                <Text onpress = {this.updateState} > => {this.state.mystate} </Text>
                </View>
            
            );
    }
}