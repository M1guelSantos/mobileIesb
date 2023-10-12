import React from 'react'
import { Button } from 'react-native-paper'

const Professores = ({navigation}) => {
  return (
    <Button style={{marginTop: 10, margin: 10}} mode='contained' onPress={()=>navigation.push('Form professores')}>Ir para formulário</Button>
  )
}

export default Professores