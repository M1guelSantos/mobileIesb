import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Alunos from './Alunos';
import AlunosForm from './AlunosForm';

const Stack = createNativeStackNavigator();
const AlunoStack = () => {
  return (
   <>
         <Stack.Navigator>
         <Stack.Screen name="Alunos" component={Alunos} options={{title: "Alunos"}} />
         <Stack.Screen name="Form alunos" component={AlunosForm} options={{title: "Form alunos"}} />
         </Stack.Navigator>
   </>
  )
}

export default AlunoStack