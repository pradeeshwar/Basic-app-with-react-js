import React, { Component } from 'react';
 
import {Image, View, TouchableOpacity,Text,    Animated,Button,StyleSheet } from 'react-native';
import drawer from '../assets/drawer.png'
 
const SlidingWidth = 300;
 
export default class App extends Component {
 
  constructor(){
      super();
 this.Animation = new Animated.Value(0);
 this.SlidingToggle = true;
  }
 ShowDrawer = () =>
  { 
    if( this.SlidingToggle === true )
      {
       Animated.timing(
        this.Animation,
                  {
                      toValue: 1,
                      duration: 5,
                   useNativeDriver: true
                  } ).start(() =>
              {
                this.SlidingToggle = false;
              });
                  
      }
      else
      {
              Animated.timing(
                  this.Animation,
                  {
                      toValue: 0,
                      duration: 1,
                   useNativeDriver: true
                  }
              ).start(() =>
              {
                  this.SlidingToggle = true;
              });
      }
  }
 
  render() {
 const Interpolate = this.Animation.interpolate(
      {
       inputRange: [ 0, 1 ],
       outputRange: [ -(SlidingWidth - 32), 0 ]
      });
 
    return (
 <View style = { styles.MainContainer }>
  <Text style = {styles.TextStyle}> MAIN CONTAINER </Text>
 <Animated.View style = {[ styles.Container, { transform: [{ translateX: Interpolate }]}]}>
 <View style = { styles.SlidingDrawer }>

                  <Button
        title="HOME" />
        
        
                  <Button
        title="ABout" />
        
                  <Button
        title="contact us" />
        
                  <Button
        title="services" />
        <Button
        title="products" />
 <Text style = {styles.TextStyle}> SlidingDrawer </Text>
</View>
 
 <TouchableOpacity onPress = { this.ShowDrawer } style = {{ padding: 1 }}>
  <Image source={require('../assets/drawer.png')}  style = {{resizeMode: 'contain', width: 30, height: 30 }} />

 </TouchableOpacity>
                
                
         </Animated.View>
 </View>
       
    );
  }
}
 
const styles = StyleSheet.create(
  {
      MainContainer:
      {
          flex: 1,
        justifyContent: 'center',
      },
  
      Container:
      {
          position: 'absolute',
         flexDirection: 'row',
          left: 0,
         bottom: 0,
        top:  0 ,
          width: SlidingWidth,
      },
  
      SlidingDrawer:
      {
          flex: 1,
          backgroundColor: '#000000',
        
      },
  
      TextStyle: {
  
          fontSize: 25,
          textAlign: 'center',
          color:'red'
      
      }
  
  });
