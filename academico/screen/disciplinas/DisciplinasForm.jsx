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
        }}> Formulário de disciplinas</Text>
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
          label="Curso"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.curso}
          onChangeText={(valor) => handleChange(valor, 'curso')} />

        <Button mode="contained" style={{marginTop: 10, margin: 5}}  onPress={salvar}>Salvar</Button>
      </ScrollView>
    </>
  )
}

export default CursosForm