import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'
import { ScrollView } from 'react-native-web'

const Alunos = ({ navigation }) => {
  const [alunos, setAlunos] = useState([])
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
    AsyncStorage.getItem('alunos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setAlunos(resultado)
    })
  }

  function confirmarExclusao(id) {
    setIdExcluir(id);
    setVisible(true);
  }

  function excluir() {
    alunos.splice(idExcluir, 1)
    AsyncStorage.setItem('alunos', JSON.stringify(alunos))
    carregarDados();
    hideDialog();
  }
  return (
    <>
      <ScrollView style={{ padding: 10 }}>
        {alunos.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">{item.nome}</Text>
              <Text variant="bodyMedium">CPF: {item.cpf}</Text>
              <Text variant="bodyMedium">Matrícula: {item.matricula}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon="delete"
                onPress={() => confirmarExclusao(i)}
              />
              <IconButton
                icon="pencil"
                onPress={() => navigation.push('Form alunos', { id: i, alunos: item })}
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
        onPress={() => navigation.push('Form alunos')}
      />
    </>
  )
}

export default Alunos