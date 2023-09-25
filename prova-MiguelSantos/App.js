import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pagina1" component={Pagina1} options={{ title: "Pagina1" }} />
          <Stack.Screen name="Pagina2" component={Pagina2} options={{ title: "Pagina2" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
};

