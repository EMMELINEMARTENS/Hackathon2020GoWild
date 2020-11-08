import React from 'react';
import {
  asset,
  Environment,
  AppRegistry,
  View,
  StyleSheet,
  Text,
  VrButton,

} from 'react-360';
import pangolin_info from '../../data/pangolinData';

export default class Rightpanel extends React.Component{
  state = {
    detail:pangolin_info.Habitat.detail,
    info:pangolin_info.Habitat.info,
    img:pangolin_info.Habitat.img,
    background:pangolin_info.Habitat.background,
    nextDetail:pangolin_info.Habitat.nextDetail,
  }

  Gofurther(nextPage){
	  this.setState({
		detail:pangolin_info[`${nextPage}`].detail,
    	info:pangolin_info[`${nextPage}`].info,
		img:pangolin_info[`${nextPage}`].img,
		background:pangolin_info[`${nextPage}`].background,
		nextDetail:pangolin_info[`${nextPage}`].nextDetail,
	  })
	  // change the enviroment 
	  Environment.setBackgroundImage(asset(`${pangolin_info[`${nextPage}`].background}`))
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View>
              <Text>{this.state.detail}</Text>
        </View>
        <View>
            <Text>{this.state.info}</Text>
        </View>
        <VrButton style={styles.button} key={`${this.state.detail}-button`} onClick={()=> this.Gofurther(this.state.nextDetail)}>
        <Text>Go further to get more about there {this.state.nextDetail}</Text>
      </VrButton>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  wrapper:{
    width:300,
    height:600,
    backgroundColor:'#CEB992',
    flexDirection:'column',
	alignItems:'stretch',
	margin:0,
    padding:10,
  },
  // header:{
  //   backgroundColor:'',
  // },
  textSize:{
    fontSize:40,
  },
  button:{
	  margin: 10,
  }
})
 AppRegistry.registerComponent('Rightpanel', () => Rightpanel)