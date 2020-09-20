import React, { Component } from 'react';
 import DrawNavigator from './components/DrawNavigator';
 import MyScreen from './components/MyScreen';
 

 export default class App extends Component{
   render(){
     return(
       <DrawNavigator />,
       
       < MyScreen />
       

     );
   }
 }