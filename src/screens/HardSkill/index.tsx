import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import FlipAnimation from '../../components/FlipAnimation';

import CarouselSlider from '../../components/CarouselSlider';

const HardSkill = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize: 32, fontFamily: 'Open-Sans'}}>HARD SKILL</Text> */}
      <Text style={styles.text}>SOFT SKILL</Text>
      <CarouselSlider/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1d1b25',
    alignItems: 'center',
    justifyContent: 'center',
},
text:{
  fontSize: 32,
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Open-Sans',
  color: 'rgba(255,255,2550,0.6)'
}
});
export default HardSkill