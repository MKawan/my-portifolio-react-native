// FlipCard.js
import React, { useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { styles } from './styles';

import Card from '../Card';
import CardBack from '../CardBack';

const FlipAnimation = ({ front, about, text, card2 }: any) => {
  const [flipped, setFlipped] = useState(false);
  const rotate = useSharedValue(0);

  const flipCard = () => {
    setFlipped(!flipped);
    rotate.value = withTiming(flipped ? 0 : 180, { duration: 800 });
  };

  const frontAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotate.value}deg` }],
    opacity: rotate.value > 90 ? 0 : 1,
  }));

  const backAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotate.value + 180}deg` }],
    opacity: rotate.value > 90 ? 1 : 0
  }));
    // Adiciona o temporizador para reverter o card após 2 segundos
    useEffect(() => {
      let timer: string | number | NodeJS.Timeout | undefined;
    
      if (flipped) {
        timer = setTimeout(() => {
          setFlipped(false);
          rotate.value = withTiming(0, { duration: 800 });
        }, 2000); // Tempo em milissegundos (2000ms = 2 segundos)
      }
  
      // Cleanup timer when component unmounts or when flipped state changes
      return () => {
        if (timer) clearTimeout(timer);
      };
    }, [flipped]);
  return (
    <TouchableWithoutFeedback onPress={flipCard}
        onPressIn={() => setFlipped(false)}
        onPressOut={() => setFlipped(true)}
    >
      <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.card, frontAnimatedStyle]}>
          <Card  card2={card2} img={front} descrition={text}/>
        </Animated.View>
        <Animated.View style={[styles.card, backAnimatedStyle]}>
          <CardBack about={about} />
        </Animated.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

  
export default FlipAnimation;
