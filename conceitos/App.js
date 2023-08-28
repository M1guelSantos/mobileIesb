import { ScrollView, StyleSheet } from 'react-native';
import Pagina3 from './screens/Pagina3';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <ScrollView style={{ marginTop: 10 }}>

        <NavigationContainer>
         <Stack.Navigator>
          
         </Stack.Navigator>
        </NavigationContainer>

      </ScrollView>
    </>
  )
};





