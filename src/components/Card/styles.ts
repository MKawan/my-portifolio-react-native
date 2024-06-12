import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      borderRadius: 20,
      backgroundColor: 'rgba(255,255,255,0.6)'
    },
    containerA:{
      height: '40%',
      width: '100%',
      alignItems: 'center',
      justifyContent:'center',
      paddingHorizontal: 5,
    },
    containerB:{
      justifyContent:'flex-start',
      alignItems: 'flex-start',
      width: '100%',
      height: '60%',
      paddingHorizontal: 10
      // borderColor:"black",
      // borderWidth: 1
    },
    card: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      backfaceVisibility: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
    },
    frontCard: {
      // backgroundColor: '#fff',
      borderRadius: 10,

    },
    backCard: {
      backgroundColor: '#000',
      position: 'absolute',
      top: 0,
      borderRadius: 10,
    },
    img: {
      borderRadius: 10,
      borderWidth: 1,
      // borderColor: 'black',
      width: '65%',
      height: '84%',
      resizeMode: 'contain'
    },
    text:{
      width: '100%',
      fontSize: 18,
      textAlign: 'justify'
    }
  });

  export default styles;