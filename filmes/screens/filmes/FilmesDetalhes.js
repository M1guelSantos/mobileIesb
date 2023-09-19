import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { View } from 'react-native'

const FilmesDetalhes = ({navigation, route}) => {  //Recuperando os parametros para não precisar do props

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
            <Card.Cover style={{ padding: 10 }} source={{ uri: "https://image.tmdb.org/t/p/w500/" + filme.backdrop_path }} />
            <Card.Content>
              <Text variant="titleLarge" style={{
                marginBottom: 5,
                fontWeight: 'bolder',
                fontSize: 20
              }} >{filme.title}</Text>
              <Text variant="bodyMedium" style={{ fontSize: 13 }} >{filme.overview}</Text>
            </Card.Content>
          </Card>

          <Card
            style={{ margin: 10 }}
          >
            <Card.Content>
              <Text variant="titleLarge" style={{
                marginBottom: 5,
                fontSize: 13
            }} >Data de Lançamento: {filme.release_date}
            </Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} > Média de votos: {filme.vote_average}</Text>
            <Text variant="bodyMedium" style={{ fontSize: 13 }} > Orçamento: {filme.budget}</Text>
            </Card.Content>
          </Card>

          {atores.map(item => (
          <Card
            style={{ margin: 5 }}
          >
            <Card.Cover style={{ padding: 10 }} source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.profile_path }} />
            <Card.Content>
            <Text variant="bodyMedium" style={{ fontSize: 15, fontWeight: 'bolder', }} > Nome: {item.name}</Text>
            </Card.Content>
          </Card>
        ))}

      </View>
    </>
  )
}

export default FilmesDetalhes