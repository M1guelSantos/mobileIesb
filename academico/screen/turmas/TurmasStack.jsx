import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Turmas from './Turmas';
import TurmasForm from './TurmasForm';

const Stack = createNativeStackNavigator();
const TurmasStack = () => {
  return (
   <>
         <Stack.Navigator>
         <Stack.Screen name="Turmas" component={Turmas} options={{title: "Turmas"}} />
         <Stack.Screen name="Form turmas" component={TurmasForm} options={{title: "Form turmas"}} />
         </Stack.Navigator>
   </>
  )
}

export default TurmasStack