import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Professores from './Professores';
import ProfessoresForm from './ProfessoresForm';

const Stack = createNativeStackNavigator();
const ProfessoresStack = () => {
  return (
   <>
         <Stack.Navigator>
         <Stack.Screen name="Professores" component={Professores} options={{title: "Professores"}} />
         <Stack.Screen name="Form professores" component={ProfessoresForm} options={{title: "Form professores"}} />
         </Stack.Navigator>
   </>
  )
}

export default ProfessoresStack