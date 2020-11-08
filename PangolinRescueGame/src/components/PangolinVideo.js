import React from 'react';
import {Text, View, StyleSheet, asset, VrButton,NativeModules, Environment, AppRegistry} from 'react-360';
import VideoModule from 'VideoModule';

export default class PangolinVideo extends React.Component{
constructor(props){
	super(props);
	this.state ={
	video: false,
}
this.startVideo = this.startVideo.bind(this);
this.renderVideo = this.renderVideo.bind(this);
}
IamaPagolinVideo = VideoModule.createPlayer('IamaPagolin');

startVideo(){
	this.setState({
		video: true,
	})
}

renderVideo(){
	if(this.state.video === false){

		this.IamaPagolinVideo.destroy();
	
		return <Text
		style={styles.Text}>
			What am I ? 
		</Text>
		
	}
	else{
		
		this.IamaPagolinVideo.play({
			source: {url: asset('./videos/whatis.mp4').uri},
			muted:false,
			volume:0.1,
		}),

		Environment.setScreen('default', 'IamaPagolin','main', 0,0,800,450)

		return <View style={{width:800,height:450}}></View>
	}
	}s

render(){
return(
	<View>
		<VrButton onClick={() => this.startVideo()}>
			{this.renderVideo()}
		</VrButton>
		
	</View>
)
}
};
const styles = StyleSheet.create({
  Text:{
		  backgroundColor: '#777879',
		  fontSize:20,
		  fontWeight: '400',
		  paddingLeft:0.2,
		  paddingRight:0.2,
		  textAlign:'center',
		  textAlignVertical:'center',
		  width:  20,
		transform:[
				{translate: [0,0, 0]},
				{rotateX: -90},
				{rotateY: 90},
						]
  },
  Video:{
	  height: 400,
	  width:600,
	  transform:[
				{translate: [-4,1, -0.5]},
				{rotateY: 90},
						]

  },
  // header:{
  //   backgroundColor:'',
  // },
  textSize:{
    fontSize:40,
  }});
AppRegistry.registerComponent('Scene',() => PangolinVideo);