import React,{Component} from 'react';
import {
	AmbientLight,
	Entity,
	asset,
	Model,
  View,
} from 'react-360';

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
		<Model
		source={{
			obj: asset('/pangolin/3dpangolin.obj'),
			mtl: asset('/pangolin/3dpangolin.mtl')
		}}
		style={{
			transform:[
				{translate: [-1, 0, -0.75]},
				{scale: 0.075},
				{rotateX: 180},
				{rotateY: -360},
			]
		}}
		
		/>
		
        {/* <Text
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
        </Text> */}
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

