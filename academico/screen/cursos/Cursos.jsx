import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Cursos = ({ navigation }) => {
  const [cursos, setCursos] = useState([])

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('cursos').then(resultado => {
        resultado = JSON.parse(resultado) || []
        setCursos(resultado)
      })
    }, [])
  );

  return (
    <>
      <ScrollView style={{padding:10}}>
        {cursos.map((item) => (
          <Card mode='outlined' style={{marginBottom:20}}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Duração: {item.duracao}</Text>
              <Text variant="bodyMedium">Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon="delete" />
              <IconButton icon="pencil" />
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      <FAB 
        icon="plus"
        size='small'
        style={{position:'absolute', right: 5, bottom: 5  }}
        onPress={() => navigation.push('Form cursos')}
      />
    </>
  )
}

export default Cursos