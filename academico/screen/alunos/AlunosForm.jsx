import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

const AlunosForm = ({navigation, route}) => {

  const alunos = route.params?.alunos || {}
  const id = route.params?.id

  function salvar(dados) {
    AsyncStorage.getItem('alunos').then(resultado => {
      const alunos = JSON.parse(resultado) || []
      if (id >= 0) {
        alunos.splice(id, 1, dados)
      } else {
        alunos.push(dados)
      }
      AsyncStorage.setItem('alunos', JSON.stringify(alunos))
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
        }}> Formulário de alunos </Text>
         <Formik
          initialValues={alunos}
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
          label="Cpf"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.cpf}
          onChangeText={handleChange('cpf')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="matricula"
          mode='outlined'
          value={values.matricula}
          onChangeText={handleChange('matricula')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="email"
          keyboardType='email-address'
          mode='outlined'
          value={values.email}
          onChangeText={handleChange('email')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="telefone"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.telefone}
          onChangeText={handleChange('telefone')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="cep"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.cep}
          onChangeText={handleChange('cep')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="logradouro"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.logradouro}
          onChangeText={handleChange('logradouro')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="complemento"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.complemento}
          onChangeText={handleChange('complemento')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="numero"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.numero}
          onChangeText={handleChange('numero')} />

        <TextInput style={{
          marginTop: 10,
          margin: 10
        }}
          label="bairro"
          keyboardType='decimal-pad'
          mode='outlined'
          value={values.bairro}
          onChangeText={handleChange('bairro')} />
        <Button mode="contained" style={{ marginTop: 10, margin: 5 }} onPress={handleSubmit}>Salvar</Button>
        </View>
      )}
        </Formik>
      </ScrollView>
    </>
  )
  }
export default AlunosForm