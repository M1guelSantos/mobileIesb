import { ScrollView, StyleSheet } from 'react-native';
import Pagina1 from './screens/Pagina1';
import Pagina2 from './screens/Pagina2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Array from './screens/Array';
import Objeto from './screens/Objeto';
import Estado from './screens/Estado';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
        <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name="Estado" component={Estado} options={{title: "Estado"}} />
         <Stack.Screen name="Objeto" component={Objeto} options={{title: "Objetos"}} />
         <Stack.Screen name="arrays" component={Array} options={{title: "Arrays"}} />
         <Stack.Screen name="Pagina1" component={Pagina1} options={{title: "Página Principal"}} />
         <Stack.Screen name="Pagina2" component={Pagina2} options={{title: "Página De Cards"}} />
         </Stack.Navigator>
        </NavigationContainer>
    </>
  )
};





