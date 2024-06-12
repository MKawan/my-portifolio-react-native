import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from './styles';

const CardBack = ({img, about}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{about}</Text>
    </View>
  )
}

export default CardBack;