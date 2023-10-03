import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personagens from './screens/Personagens';
import PersonsDetalhes from './screens/PersonsDetalhes';




export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Personagens" component={Personagens} options={{ title: "Personagens" }} />
          <Stack.Screen name="Personagens-detalhes" component={PersonsDetalhes} options={{ title: "Personagens-detalhes" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

