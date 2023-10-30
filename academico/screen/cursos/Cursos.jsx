import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Cursos = ({ navigation }) => {
  const [cursos, setCursos] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);


  useFocusEffect(
    React.useCallback(() => {
      carregarDados();
    }, [])
  );

  function carregarDados() {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)
    })
  }

  function confirmarExclusao(id){
    setIdExcluir(id);
    setVisible(true);
  }

  function excluir() {
      cursos.splice(idExcluir, 1)
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
      carregarDados();
      hideDialog();
  }

  return (
    <>
      <ScrollView style={{ padding: 10 }}>
        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">Duração: {item.duracao}</Text>
              <Text variant="bodyMedium">Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon="delete"
                onPress={() => confirmarExclusao(i)}
              />
              <IconButton 
              icon="pencil"
              onPress={() => navigation.push('Form cursos', {id: i, curso: item})}
              />
            </Card.Actions>
          </Card>
        ))}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja realmente excluir?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Excluir</Button>
              <Button onPress={hideDialog}>Cancelar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </ScrollView>
      <FAB
        icon="plus"
        size='small'
        style={{ position: 'absolute', right: 5, bottom: 5 }}
        onPress={() => navigation.push('Form cursos')}
      />
    </>
  )
}

export default Cursos