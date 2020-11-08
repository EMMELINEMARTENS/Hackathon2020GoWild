import React,{Component} from 'react';
import {
	AmbientLight,
  AppRegistry,
	asset,
  View,
} from 'react-360';

import PangolinVideo from './components/PangolinVideo';

import Entity from 'Entity';


// import Pangolin from './components';

export default class App extends React.Component{
  state = {
    detail:pangolin_info.Habitat.detail,
    info:pangolin_info.Habitat.info,
    img:pangolin_info.Habitat.img,
    background:pangolin_info.Habitat.background,
	nextDetail:pangolin_info.Habitat.nextDetail,
  }
  Renderfood(){

  }

  renderModel(){
	  if(this.state.detail == pangolin_info.Habitat.detail){
		//    <PangolinVideo/>

	  }else if(this.state.detail == pangolin_info.Diet.detail){
		return <Entity
				source={{
					obj: asset('pangolin/3dpangolin.obj'),
					mtl: asset('pangolin/3dpangolin.mtl')
				}}
				style={{
					transform:[
						{translate: [-10,-30, -20]},
				{scaleX: 0.00075},
				{scaleY: 0.00075},
				{scaleZ: 0.00075},
						{rotateX: -90},
						{rotateY: 0},
					]
				}}
				
		/>
	  } else if (this.state.detail == pangolin_info.Behavior.detail){

	  } else if(this.state.detail == pangolin_info.Reproduction.detail){

	  }else if(this.state.detail == pangolin_info.Traps.detail){

	  }else {

	  }
	  
  }
	render(){
   return (
      <View>
		  {this.renderModel()}
		<AmbientLight intensity={2.5}/>
		<Entity
		source={{
			obj: asset('pangolin/3dpangolin.obj'),
			mtl: asset('pangolin/3dpangolin.mtl')
		}}
		style={{
			transform:[
				{translate: [-10,-30, -20]},
        {scaleX: 0.00075},
        {scaleY: 0.00075},
        {scaleZ: 0.00075},
				{rotateX: -90},
				{rotateY: 0},
			]
		}}
		
		/>
   
      </View>
    );
	}
 
  };

