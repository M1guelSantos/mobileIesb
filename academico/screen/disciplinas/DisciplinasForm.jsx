import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinasForm = ({navigation, route}) => {

  const disciplinas = route.params?.disciplinas || {}
  const id = route.params?.id
 // const [dados, setDados] = useState({})

 /* function handleChange(valor, campo) {
    setDados({ ...dados, [campo]: valor })
  } */

  function salvar(dados) {
    AsyncStorage.getItem('disciplinas').then(resultado => {
      const disciplinas = JSON.parse(resultado) || []
      if (id >= 0) {
        disciplinas.splice(id, 1, dados)
      } else {
        disciplinas.push(dados)
      }
      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
      navigation.goBack()
    })
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
        <Formik
          initialValues={disciplinas}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <View>
              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="Nome"
                mode='outlined'
                value={values.nome}
                onChangeText={handleChange('nome')}
              />

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="Curso"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.curso}
                onChangeText={handleChange('curso')} />
              <Button mode="contained" style={{ marginTop: 10, margin: 5 }} onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default DisciplinasForm