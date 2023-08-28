import React from 'react'
import Card from '../components/Card'
import Botoes from '../components/Botoes'
import { Text } from 'react-native'


const Pagina = () => {
  return (
    <>
    <Card titulo = "MIGUEL MALUCO 1"> </Card>
    <Text>Teste1</Text>
    <Text>Teste2</Text>
    <Text>Teste3</Text>
    <Botoes/>

    <Card titulo = "MIGUEL MALUCO 2">
      <Text>Filho 1</Text>
    </Card>
    
    <Card titulo = "MIGUEL MALUCO 3"> 
      <Text>Filho1</Text>
    </Card>

    </>
  )
}

export default Pagina