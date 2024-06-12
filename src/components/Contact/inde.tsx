import { View, Text, Image } from 'react-native'
import React from 'react'

import { listHome } from '../../data/listHome'
import { styles } from './styles'

const Contact = () => {
  return (
    <View style={styles.container}>
        {listHome.map((e:any , i: number) => 
        <View style={styles.containerConatct} key={i}>
            <Image style={styles.img} source={e.img}/>
            <Text style={styles.text}>{e.name}</Text>
        </View>
        )}

    </View>
  )
}
import { StyleSheet } from 'react-native';


export default Contact