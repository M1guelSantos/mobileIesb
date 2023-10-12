import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const AlunosForm = () => {
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
        }}> Formulário de Professores </Text>
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
          label="cpf"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.cpf}
          onChangeText={(valor) => handleChange(valor, 'cpf')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="matricula"
          mode='outlined'
          value={dados.matricula}
          onChangeText={(valor) => handleChange(valor, 'matricula')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="salario"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.salario}
          onChangeText={(valor) => handleChange(valor, 'salario')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="email"
          keyboardType='email-address'
          mode='outlined'
          value={dados.email}
          onChangeText={(valor) => handleChange(valor, 'email')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="telefone"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.telefone}
          onChangeText={(valor) => handleChange(valor, 'telefone')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="cep"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.cep}
          onChangeText={(valor) => handleChange(valor, 'cep')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="logradouro"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.logradouro}
          onChangeText={(valor) => handleChange(valor, 'logradouro')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="complemento"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.complemento}
          onChangeText={(valor) => handleChange(valor, 'complemento')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="numero"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.numero}
          onChangeText={(valor) => handleChange(valor, 'numero')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="bairro"
          keyboardType='decimal-pad'
          mode='outlined'
          value={dados.bairro}
          onChangeText={(valor) => handleChange(valor, 'bairro')} />

        <Button style={{ marginTop: 10, margin: 5 }} mode="contained" onPress={salvar}>Salvar</Button>
      </ScrollView>

    </>
  )
}

export default AlunosForm