import { ScrollView,  StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
   <> 
    <ScrollView style={{marginTop: 20}}>

    <Card>
    <View style={styles.card}>
      <Text style={styles.titulo}>Hello world!!</Text>
      <Text>Isto e um paragrafo</Text>
      <Text>Isto e um paragrafo</Text>
      <Text>Isto e um paragrafo</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>MIGUELDOIDAO</Text>
      <Text>Isto e um paragrafo</Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.titulo}>MIGUELDOIDAO</Text>
      <Text>Isto e um paragrafo</Text>
      <Text>Isto e um paragrafo</Text>
      <Text>Isto e um paragrafo</Text>
    </View>
    </Card>
    </ScrollView>
    </>
)};
