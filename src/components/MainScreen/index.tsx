import { StyleSheet, View, Text, Image, SafeAreaView} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import styles  from './styles'


import ImgPerfil from '../../assets/img/file.png';
import CarouselSlider from '../CarouselSlider';
import { useFonts } from 'expo-font';

const MainScreen = () => {

  return (
    <View style={styles.container}>
        <View style={styles.perfil}>
          <View>
              <Image source={ImgPerfil}
                style={styles.imgProfile}
                />
          </View>
          <Text style={[styles.text, {fontFamily: 'Open-Sans'}]}>Mateus Oliveira</Text>
        </View>
        <StatusBar style="auto"/>
    </View>
  )
}

export default MainScreen