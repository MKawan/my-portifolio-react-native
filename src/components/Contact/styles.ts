import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 30
  },
  containerConatct: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '20%'
  },
  text: {
      width: '60%',
      fontSize: 28,
      color: 'rgba(255,255,255,0.6)',
      fontFamily: 'Open-Sans',
      textAlign: 'right'
    },
    img:{
      height: '100%',
      width: '40%',
      resizeMode: 'cover',
      borderRadius: 20
    }
  });