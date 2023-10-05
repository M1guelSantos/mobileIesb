import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cursos from './Cursos';
import CursosForm from './CursosForm';

const Stack = createNativeStackNavigator();
const CursoStack = () => {
  return (
   <>
         <Stack.Navigator>
         <Stack.Screen name="Cursos" component={Cursos} options={{title: "Cursos"}} />
         <Stack.Screen name="Form cursos" component={CursosForm} options={{title: "Form cursos"}} />
         </Stack.Navigator>
   </>
  )
}

export default CursoStack