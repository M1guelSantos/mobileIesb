import React, { useEffect, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiChaves from '../services/apiChaves'

const Personagens = ({navigation}) => {

  const [personagem, setPersonagem] = useState([])
  useEffect(() => {
    apiChaves.get('/personagens').then(resultado => {
      setPersonagem(resultado.data);
    })
  }, [])

  return (
    <>
      <ScrollView>
        <Text style={{
          color: 'red',
          fontSize: 20,
          fontWeight: 'bolder',
          textAlign: 'center',
          marginTop: 10
        }}>Personagens do Chaves
        </Text>

        {personagem.map(item => (
          <Card mode="outlined" style={{
            margin: 8,
            borderRadius: 10,
          }}>
            <Card.Title style={{
              margin: 10
            }}
              title={item.nome}
              subtitle={item.siglaUf}
              left={(props) => <Avatar.Image size={50} source={{ uri: item.urlFoto }} />}
              right={(props) => <IconButton {...props} icon="chevron-right-circle-outline" onPress={() => navigation.push('Personagens-detalhes', { id: item.id })} />}
            />
          </Card>
        ))}
      </ScrollView>
    </>
  )
}

export default Personagens
