import React, { useEffect, useState } from 'react';
import Router from './src/routers';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'Open-Sans': require('./src/fonts/Open_Sans/static/OpenSans-ExtraBold.ttf'),
  });
};

export default function App() {
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
  
  return (
  <>
    <Router/>
    <StatusBar style="light"/>
  </>
  );
}