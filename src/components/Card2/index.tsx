// src/components/Card.js
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

type Props = {
  color1: any
  color2: any
}

const Card2 = ({color1, color2}: Props) => {
    
  return (
    <LinearGradient 
        colors={[color1, color2]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.card}>
    </LinearGradient>
  );
};

export default Card2;