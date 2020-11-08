import React,{Component} from 'react';
import {
	AmbientLight,
  AppRegistry,
	asset,
  View,
} from 'react-360';

import Entity from 'Entity';

// import Pangolin from './components';

export default class App extends React.Component{
   constructor(props){  
    super(props);  
    this.state = {  
         name: "" 
      } }

	render(){
   return (
      <View>
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

