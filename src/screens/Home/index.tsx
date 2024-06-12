import { StyleSheet, View } from 'react-native'
import Contact from '../../components/Contact/inde';


const Home = () => {

return (
    <View style={styles.container}>
        <Contact/>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#1d1b25',
    alignItems: 'center',
    justifyContent: 'center',
},
});

export default Home