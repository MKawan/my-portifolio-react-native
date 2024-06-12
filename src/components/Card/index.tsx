import { View, Text, Image, ImageSourcePropType, SafeAreaView } from 'react-native'
import { BlurView } from 'expo-blur';
import styles  from './styles';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';


type Props = {
    img: ImageSourcePropType
    descrition: string[]
    card2: any
}

// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Open-Sans': require('../../fonts/Open_Sans/static/OpenSans-ExtraBold.ttf'),
//   });
// };
  
const Card = ({img, descrition, card2}: Props) => {

  // const [fontsLoaded, setFontsLoaded] = useState(false);

  // useEffect(() => {
  //   async function loadResources() {
  //     await loadFonts();
  //     setFontsLoaded(true);
  //   }

  //   loadResources();
  // }, []);

  // if (!fontsLoaded) {
  //   return null;
  // }
  
  return (
    <SafeAreaView  style={styles.container}>
      <View style={styles.containerA}>
        {card2}
        <Image source={img} style={styles.img}/>
      </View>
      <View style={styles.containerB}>
        {descrition.map((e: string, index: number) => <Text style={[styles.text, { fontFamily: 'Open-Sans'}]} key={index}>{e}</Text>)}
      </View>
    </SafeAreaView>
  )
}

export default Card