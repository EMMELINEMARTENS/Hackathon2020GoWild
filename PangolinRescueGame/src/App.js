import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
import Pangolin from './components/pangolin';

export default class PangolinRescueGame extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('rainforest.jpeg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          hello
        </Text>
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
AppRegistry.registerComponent('Pangolin', () => Pangolin);
