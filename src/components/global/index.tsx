import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';



const Global = () => {
  const loadFonts = async () => {
    await Font.loadAsync({
      'Open-Sans': require('./src/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf'),
    });
  };
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      
      async function loadResources() {
        await loadFonts();
        setFontsLoaded(true);
      }
  
      loadResources();
    }, []);
  
    if (!fontsLoaded) {
      return null;
    }
  return (loadFonts)
}

export default Global