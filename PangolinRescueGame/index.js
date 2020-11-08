import React,{Component} from 'react';
// import { AppRegistry } from 'react-native';
import {
AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import App from './src/App';
import Leftpanel from './src/components/Leftpanel';
import Rightpanel from './src/components/Rightpanel';


export default class PangolinRescueGame extends React.Component{
   constructor(props){  
    super(props);  
    this.state = {  
         name: "" 
      } }
  render() {
    return (
      <View>
      <App/>
      <Leftpanel/>
      <Rightpanel/>
      </View>
    );
  }
};

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1000,
//     height: 600,
//     backgroundColor: 'rgba(255, 255, 255, 0.4)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });

AppRegistry.registerComponent('PangolinRescueGame', () => PangolinRescueGame);

