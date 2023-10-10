import React from 'react'
import { Button, Text } from 'react-native-paper'

const Alunos = ({navigation}) => {
  return (
   <Button style={{marginTop: 10, margin: 10}} mode='contained' onPress={()=>navigation.push('Form alunos')}>Ir para formulário</Button>
  )
}

export default Alunos