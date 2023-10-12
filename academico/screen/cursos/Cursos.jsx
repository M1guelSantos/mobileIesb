import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { Button, Card, Text, TextInput } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Cursos = ({ navigation }) => {
  const [cursos, setCursos] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado => {
      setCursos(JSON.parse(resultado))
    })
  }, [])

  return (
    <>
      <Button style={{ marginTop: 10, margin: 10 }} mode='contained' onPress={() => navigation.push('Form cursos')}>Ir para formulário</Button>
      {cursos.map(item => (
        <>
          <Card style={{margin:5}}>
            <Card.Actions>
            <Text style={{margin:10}}>{item.nome}</Text>
            <MaterialCommunityIcons name="trash-can" size={20} />
            <MaterialCommunityIcons name="comment-edit" size={20} />
            </Card.Actions>
          </Card>
        </>
      ))}
    </>
  )
}

export default Cursos