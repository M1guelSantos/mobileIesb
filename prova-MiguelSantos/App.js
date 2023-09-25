import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Teste from './screens/Teste';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Teste" component={Teste} options={{ title: "Teste" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

