import React from 'react'
import { Button } from 'react-native-paper'


const Disciplinas = ({navigation}) => {
  return (
    <>
      <Button style={{marginTop: 10, margin: 10}} mode='contained' onPress={()=>navigation.push('Form disciplinas')}>Ir para formulário</Button>
    </>
  )
}

export default Disciplinas