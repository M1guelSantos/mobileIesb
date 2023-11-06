import AsyncStorage from '@react-native-async-storage/async-storage'
import { Picker } from '@react-native-picker/picker'
import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import disciplinaValidator from '../../validators/disciplinaValidator';


const DisciplinasForm = ({ navigation, route }) => {

  let disciplinas = {
    nome: '',
    curso_id: ''
  }

  const [cursos, setCursos] = useState([])
  const id = route.params?.id

  if (id >= 0) {
    disciplinas = route.params?.disciplinas
  }

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)
    })
  }, [])

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
          validationSchema={disciplinaValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
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

              <Picker
                selectedValue={values.curso_id}
                onValueChange={handleChange('curso_id')}>
                <Picker.Item label="Curso" value="" />
                {cursos.map((item, i) => (
                  <Picker.Item key={i}
                    label={item.nome}
                    value={item.nome}
                  />
                ))}
              </Picker>
              <Button mode="contained" style={{ marginTop: 10, margin: 5 }} onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default DisciplinasForm