import { StyleSheet } from "react-native";

export const configTopBar: any = {
    swipeEnabled: false, // Desabilita navegação por deslizamento
    tabBarShowLabel: false,
    tabBarItemStyle: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: '#1d1b25',
      marginBottom: 10
    },
    tabBarStyle: {
      backgroundColor: '#1d1b25',
    },
    tabBarIndicatorStyle: {
      backgroundColor: '#fff', // Cor do indicador
      height: 2, // Altura do indicador
    }
}

export const styles = StyleSheet.create({
    icons: {width: 34, height: 34},
});

