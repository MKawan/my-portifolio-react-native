import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      width: '100%', // Ajuste a largura conforme necessário
      height: '80%', // Ajuste a altura conforme necessário
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      height: '100%',
      width: '100%',
      resizeMode: 'contain',
    },
      card: {
      width: 295, 
      height: 230, 
      // Apply borderRadius to the Image 
      borderTopLeftRadius: 25, 
      borderTopRightRadius: 25, 
      borderBottomLeftRadius: 25, 
      borderBottomRightRadius: 120,
      position: 'absolute'
}
  });

  export default styles; 