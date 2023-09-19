import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
    <PaperProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='filmes-populares' component={FilmesPopulares} options={{title: "Filmes populares"}} />
          <Stack.Screen name='filmes-detalhes' component={FilmesDetalhes} options={{title: "Detalhes"}} />
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </>
  );
}
