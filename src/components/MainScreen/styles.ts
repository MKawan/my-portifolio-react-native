import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {    
    width: '100%',
    height: 120,
    alignItems: 'center',
    // justifyContent: '',
    padding:25,
    backgroundColor: '#1d1b25',
  },
  perfil:{
    width: '100%',
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgProfile: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,0.6)'
  },
  paralax:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    color: 'rgba(255,255,255,0.6)'
  }
});

export default styles; 