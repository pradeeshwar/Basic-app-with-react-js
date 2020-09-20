import * as React from 'react';
import { Button, View, Text ,document} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  { Component } from 'react'
import {   Password, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import DrawNavigator from './DrawNavigator';
import ColorColor from './ColorColor';
function Inputs({navigation}) {
  const state = { email: '',password: ''}
  const Email = (text) => { this.setState({ email: text }) }
  const  Password = (Password) => {this.setState({ Password: Password})}
 
 
 return (
  <View style = {styles.container}>
   <TextInput style = {styles.input}
   underlineColorAndroid = "transparent"
   placeholder = "Email"
   placeholderTextColor = "#9a73ef"
   autoCapitalize = "none"/>
            
<TextInput style = {styles.input}
 underlineColorAndroid = "transparent"
 placeholder = "Password"
 secureTextEntry
 placeholderTextColor = "#9a73ef"
autoCapitalize = "none" /> 
            
 <TouchableOpacity
  style = {styles.submitButton}onPress={() => navigation.navigate('Home')}
                             >
 <Text style = {styles.submitButtonText}> Submit </Text>
     </TouchableOpacity>
</View>
)
}



const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#00ff00',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'blue'
   }
})

function HomeScreen({ navigation }) {
  return (
    <View style={{  }}>
      <Text>click on the buttons </Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('draw')}
      />
       <Button
        title="Go to add color"
        onPress={() => navigation.navigate('color')}
      />
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN HERE">
        <Stack.Screen name="LOGIN HERE" component={Inputs} />
        <Stack.Screen name="Home" component={HomeScreen} />
      
        <Stack.Screen name="draw" component={DrawNavigator} />
        <Stack.Screen name="color" component={ColorColor} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
