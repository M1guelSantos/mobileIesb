import React from 'react'
import { Button } from 'react-native-paper'


const Disciplinas = ({navigation}) => {
  return (
    <>
     <Button mode='text' onPress={()=>navigation.push('Form disciplinas')}>Ir para formulario</Button>
    </>
  )
}

export default Disciplinas