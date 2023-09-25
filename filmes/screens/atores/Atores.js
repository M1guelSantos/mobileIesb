import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'


const Atores = ({ navigation, route }) => {
  const [ator, setAtor] = useState({})
  const [Filmes, setFilmes] = useState([])
  useEffect(() => {
    apiFilmes.get(`/person/${route.params.id}`).then(resultado => {
      setAtor(resultado.data)
    })
    apiFilmes.get(`/person/${route.params.id}/movie_credits`).then(resultado => {
      setFilmes(resultado.data.cast);
    })
  }, [])
  return (
    <>
      <Card mode="outlined"
        style={{ margin: 10 }}
      >
        <Avatar.Image size={150} style={{ marginLeft: 100 }} source={{ uri: "https://image.tmdb.org/t/p/w500/" + ator.profile_path }} />
        <Card.Content>
          <Text variant="titleLarge" style={{
            marginBottom: 5,
            fontSize: 13
          }}>
          </Text>
          <Text variant="bodyMedium"><strong>Nome:</strong>{ator.name}</Text>
          <Text variant="bodyMedium"><strong>Biografia:</strong> {ator.biography}</Text>
        </Card.Content>
      </Card>


      <Card mode="outlined"
        style={{ margin: 10 }}
      >
        <Card.Content>
          <Text variant="titleLarge" style={{
            marginBottom: 5,
            fontSize: 13
          }}>
          </Text>
          <Text variant="bodyMedium"><strong>Sexo:</strong> {ator.gender  === 1 ? 'Feminino' : 'Masculino'}</Text>
          <Text variant="bodyMedium"><strong>Nascimento:</strong> {ator.birthday}</Text>
          <Text variant="bodyMedium"><strong>Lugar de Nascimento:</strong> {ator.place_of_birth}</Text>
        </Card.Content>
      </Card>
      {Filmes.map(item => (
        <Card mode="outlined"
          key={item.id}
          onPress={() => navigation.push('filmes-detalhes', { id: item.id })}
          style={{ margin: 10 }}
        >
          <Card.Cover style={{ padding: 10 }} source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge" style={{
              marginBottom: 5,
              fontWeight: 'bolder',
              fontSize: 20
            }} >{item.title}</Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} >{item.overview}</Text>
          </Card.Content>
        </Card>
      ))}

    </>
  )
}

export default Atores