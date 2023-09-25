import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { View } from 'react-native'

const FilmesDetalhes = ({ navigation, route }) => {  //Recuperando os parametros para não precisar do props

  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])

  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
      setFilme(resultado.data); // Pegar todos os parametros
    })

    apiFilmes.get(`/movie/${id}/credits`).then(resultado => {
      setAtores(resultado.data.cast);
    })
  }, [])


  return (
    <>
      <View>
        <Card
          style={{ margin: 10 }}
        >
          <Card.Cover source={{ uri: "https://image.tmdb.org/t/p/w500/" + filme.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge" style={{
              marginBottom: 5,
              fontWeight: 'bolder',
              fontSize: 20
            }} >{filme.title}</Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} >{filme.overview}</Text>
          </Card.Content>
        </Card>

        <Card mode="outlined"
          style={{ margin: 10 }}
        >
          <Card.Content>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} > Orçamento: {filme.budget}</Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} > Voto: {filme.vote_average}</Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} > Média de votos: {filme.runtime} min</Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} > Lançamento: {filme.release_date}</Text>
          </Card.Content>
        </Card>
        <Text style={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: 18,
          textAlign: 'center'
        }}>Filmes:</Text>

        {atores.map(item => (
          <Card mode="outlined" style={{
            margin: 8,
            borderRadius: 10,
          }}>
            <Card.Title style={{
              margin: 10
            }}
              title={item.name}
              subtitle={item.character}
              left={(props) => <Avatar.Image size={45} source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.profile_path }} />}
              right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => navigation.push('atores-detalhes', { id: item.id })} />}
            />
          </Card>
        ))}
      </View>
    </>
  )
}

export default FilmesDetalhes