import { Button, ScrollView,  StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
   <> 
    <ScrollView style={{marginTop: 10}}>

    <Card titulo = "MIGUEL MALUCO 1"> </Card>
    <Text>Teste1</Text>
    <Text>Teste2</Text>
    <Text>Teste3</Text>
    <Botoes/>

    <Card titulo = "MIGUEL MALUCO 2">
      <Text>Filho 1</Text>
    </Card>
    
    <Card titulo = "MIGUEL MALUCO 3"> 
      <Text>Filho1</Text>
    </Card>

    </ScrollView>
    </>   
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius : 1,
    borderStyle: 'solid',
    marginBottom: 20
  },
  titulo:{
    color:'white',
    fontSize: 25,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomCollor: 'red',
    borderBottomStyle: 'solid',
    textAlign: 'center', 
    backgroundColor: '#ccc'
    },
  });



