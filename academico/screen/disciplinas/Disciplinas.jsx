import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'


const Disciplinas = ({ navigation }) => {

  const [disciplinas, setDisciplinas] = useState([])
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
    AsyncStorage.getItem('disciplinas').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setDisciplinas(resultado)
    })
  }

  function confirmarExclusao(id) {
    setIdExcluir(id);
    setVisible(true);
  }

  function excluir() {
    disciplinas.splice(idExcluir, 1)
    AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    carregarDados();
    hideDialog();
  }
  return (
    <>
      <ScrollView style={{ padding: 10 }}>
        {disciplinas.map((item, i) => (
          <Card key={i} mode='outlined' style={{ marginBottom: 20 }}>
            <Card.Content>
              <Text variant="titleLarge">Disciplina: {item.nome}</Text>
              <Text variant="bodyMedium">Curso: {item.curso}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
                icon="delete"
                onPress={() => confirmarExclusao(i)}
              />
              <IconButton
                icon="pencil"
                onPress={() => navigation.push('Form disciplinas', { id: i, disciplinas: item })}
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
        onPress={() => navigation.push('Form disciplinas')}
      />
    </>
  )
}

export default Disciplinas