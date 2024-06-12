import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

import imgSoft from '../../assets/img/SOFT.png'
import CarouselFlow from '../../components/CarouselFLow/inde'
import { listSoftSkill } from '../../data/listSoftSkill';

const SoftSkill = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SOFT SKILL</Text>
        <CarouselFlow Items={listSoftSkill}/> 
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    width:'100%',
    height: '100%',
    backgroundColor: '#1d1b25',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
},
text:{
  fontSize: 32,
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Open-Sans',
  color: 'rgba(255,255,2550,0.6)'
}
});
export default SoftSkill