import React,{Component} from 'react';
// import { AppRegistry } from 'react-native';
import {
AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  VrButton,
  NativeModules,
  asset,
} from 'react-360';
import App from './src/App';
import Rightpanel from './src/components/Rightpanel';
import Middlepanel from './src/components/Middlepanel';
 const {AudioModule} = NativeModules;
class AudioPanel extends React.Component{
    playAmbientMusic(){
	  AudioModule.playEnvironmental({
		  source: asset('sounds/rainforest.wav'),
      volume:0.3,
    })
  }
    stopAmbientMusic(){
      AudioModule.stopEnvironmental()
    }
  render(){
    return(
      <View>
        <VrButton onClick={() => this.playAmbientMusic()}>
          <Image style={{width:50, height:50}} source={asset('audioOn.png')}/>
        </VrButton>
        <VrButton onClick={() => this.stopAmbientMusic()}>
          <Image style={{width:50, height:50}} source={asset('audioOff.png')}/>
        </VrButton>
      </View>
    )
  }
}

export default class PangolinRescueGame extends React.Component{
   constructor(props){  
    super(props);  
    this.state = {  
         scene:'',
      } }
  render() {
    
    return (
      <View>
      <App/>
      <Middlepanel/>
      <Rightpanel/>
      <AudioPanel/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('PangolinRescueGame', () => PangolinRescueGame);

