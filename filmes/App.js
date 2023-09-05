import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import {NavigationContainer, PaperProvider} from 'react-native-paper';
import PopularMovies from './screens/filmes/PopularMovies';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Profile' component={PopularMovies} options={{title:'Titulo'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </>
  );
}
