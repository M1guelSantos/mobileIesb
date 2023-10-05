import React from 'react'
import { Button, Text } from 'react-native-paper'

const Alunos = ({navigation}) => {
  return (
    <Button mode='text' onPress={()=>navigation.push('Form alunos')}></Button>
  )
}

export default Alunos