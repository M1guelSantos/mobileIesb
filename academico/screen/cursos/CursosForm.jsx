import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursosForm = () => {
  const [dados, setDados] = useState({})

  function handleChange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  }

  function salvar() {
    console.log(dados)
  }

  return (
    <>
      <ScrollView style={{
         marginTop: 10
      }}>
        <Text style={{
          margin: 10,
          color: 'red',
          fontWeight: 'bolder',
        }}> Formulário de curso </Text>
        <TextInput style={{
           marginTop: 10,
           margin: 10
        }}
          label="Nome"
          mode='outlined'
          value={dados.nome}
          onChangeText={(valor) => handleChange(valor, 'nome')}
        />

        <TextInput style={{
           marginTop: 10,
           margin: 10
        }}
          label="Duração"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.duracao}
          onChangeText={(valor) => handleChange(valor, 'duracao')} />

        <TextInput style={{
           marginTop: 10,
           margin: 10
        }}
          label="Modalidade"
          mode='outlined'
          value={dados.modalidade}
          onChangeText={(valor) => handleChange(valor, 'modalidade')} />

        <Button mode="contained" style={{marginTop: 10, margin: 5}}  onPress={salvar}>Salvar</Button>
      </ScrollView>
    </>
  )
}

export default CursosForm