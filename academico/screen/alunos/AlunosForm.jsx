import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import { ScrollView, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import alunosValidator from '../../validators/alunosValidator'
import { mask } from 'remask'

const AlunosForm = ({ navigation, route }) => {


  let aluno = {
    nome: '',
    cpf: '',
    matricula: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    complemento: '',
    numero: '',
    bairro: '',
  }
  const id = route.params?.id
  if (id >= 0) {
    aluno = route.params?.aluno
  }

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
          initialValues={aluno}
          validationSchema={alunosValidator}
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
                label="Cpf"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.cpf}
                onChangeText={value => setFieldValue('cpf', mask(value, '999.999.999-99'))}
              />
              {(errors.cpf && touched.cpf) &&
                <Text style={{ color: 'red' }}>{errors.cpf}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="matricula"
                mode='outlined'
                value={values.matricula}
                onChangeText={handleChange('matricula')}
              />
              {(errors.matricula && touched.matricula) &&
                <Text style={{ color: 'red' }}>{errors.matricula}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="email"
                keyboardType='email-address'
                mode='outlined'
                value={values.email}
                onChangeText={handleChange('email')}
              />
              {(errors.email && touched.email) &&
                <Text style={{ color: 'red' }}>{errors.email}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="telefone"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.telefone}
                onChangeText={value => setFieldValue('telefone', mask(value, '(99)9 9999-9999'))}
              />
              {(errors.telefone && touched.telefone) &&
                <Text style={{ color: 'red' }}>{errors.telefone}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="cep"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.cep}
                onChangeText={value => setFieldValue('cep', mask(value, '99.999-999'))}
              />
              {(errors.cep && touched.cep) &&
                <Text style={{ color: 'red' }}>{errors.cep}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="logradouro"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.logradouro}
                onChangeText={handleChange('logradouro')}
              />
              {(errors.logradouro && touched.logradouro) &&
                <Text style={{ color: 'red' }}>{errors.logradouro}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="complemento"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.complemento}
                onChangeText={handleChange('complemento')}
              />
              {(errors.complemento && touched.complemento) &&
                <Text style={{ color: 'red' }}>{errors.complemento}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="numero"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.numero}
                onChangeText={handleChange('numero')}
              />
              {(errors.numero && touched.numero) &&
                <Text style={{ color: 'red' }}>{errors.numero}</Text>
              }

              <TextInput style={{
                marginTop: 10,
                margin: 10
              }}
                label="bairro"
                keyboardType='decimal-pad'
                mode='outlined'
                value={values.bairro}
                onChangeText={handleChange('bairro')}
              />
              {(errors.bairro && touched.bairro) &&
                <Text style={{ color: 'red' }}>{errors.bairro}</Text>
              }
              <Button mode="contained" style={{ marginTop: 10, margin: 5 }} onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}
export default AlunosForm