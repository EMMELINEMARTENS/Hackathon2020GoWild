import React from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Text,

} from 'react-360';
import pangolin_info from '../../data/pangolinData';

export default class Rightpanel extends React.Component{

  render(){
    return(
      <View style={styles.wrapper}>
        <View>
          <Text style={{fontSize:40, textAlign:'center'}}>Search the pagolin he wills give you a mission</Text>
        </View>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  wrapper:{
    width:600,
    height:200,
    backgroundColor:'#CEB992',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'stretch',
    padding:40,
  },
  // header:{
  //   backgroundColor:'',
  // },
  textSize:{
    fontSize:40,
  }
})
 AppRegistry.registerComponent('Rightpanel', () => Rightpanel)