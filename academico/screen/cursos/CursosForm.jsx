import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Formik } from 'formik';
import cursoValidator from '../../validators/cursoValidator';
import {mask} from 'remask'

const CursosForm = ({ navigation, route }) => {

  let curso = {
    nome: '',
    duracao: '',
    modalidade: '',
  }

  const id = route.params?.id

  if (id >= 0) {
    curso = route.params?.curso
  }


  // const [dados, setDados] = useState(curso)

  /* function handleChange(valor, campo) {
     setDados({ ...dados, [campo]: valor })
   }*/

  function salvar(dados) {
    AsyncStorage.getItem('cursos').then(resultado => {
      const cursos = JSON.parse(resultado) || []
      if (id >= 0) {
        cursos.splice(id, 1, dados)
      } else {
        cursos.push(dados)
      }
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
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
        }}> Formulário de curso </Text>
        <Formik
          initialValues={curso}
          validationSchema={cursoValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
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
              {(errors.nome && touched.nome) &&
                <Text style={{ color: 'red' }}>{errors.nome}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="Duração"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.duracao}
                onChangeText={handleChange('duracao')}
              />
              {(errors.duracao && touched.duracao) &&
                <Text style={{ color: 'red' }}>{errors.duracao}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="Modalidade"
                mode='outlined'
                value={values.modalidade}
                onChangeText={handleChange('modalidade')}
              />
              {(errors.modalidade && touched.modalidade) &&
                <Text style={{ color: 'red' }}>{errors.modalidade}</Text>
              }
              <Button mode="contained" style={{ marginTop: 10, margin: 5 }} onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default CursosForm