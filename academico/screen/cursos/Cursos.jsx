import React from 'react'
import { Button, Text } from 'react-native-paper'

const Cursos = ({navigation}) => {
  return (
    <>
     <Button style={{marginTop: 10, margin: 10}} mode='contained' onPress={()=>navigation.push('Form cursos')}>Ir para formulário</Button>
    </>
  )
}

export default Cursos