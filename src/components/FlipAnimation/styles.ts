import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      
    },
    card: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      // borderColor: '#000',
    },
    backCard: {
      position: 'absolute',
      borderRadius: 20,
    }
  });

  