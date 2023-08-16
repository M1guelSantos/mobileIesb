import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello world!!</Text>
      <Text>Isto e um paragrafo</Text>
      <Text>Isto e um paragrafo</Text>
      <Text>Isto e um paragrafo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'red',
    fontSize: 30,
    height: '20%',
    borderRadius : 1,
    borderStyle: 'dotted',
    borderColor: 'blue',
    borderWidth: 3,
    padding: 50,
  }
});
