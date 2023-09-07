import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { Button, Card } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const FilmesPopulares = () => {

  const [FilmesPopulares, setFilmesPopulares] = useState([])

  function carregar() {
    apiFilmes.get('/movie/popular?language=pt-BR').then(resultado => {
      setFilmesPopulares(resultado.data.results);
    })
  }

  return (
    <>
    <View>
      <Button onPress={carregar}>Carregar Filmes</Button>
      {FilmesPopulares.map(item => (
        <Card style={{margin:10}}>
          <Card.Cover style={{padding:10}} source={{ uri: "https://image.tmdb.org/t/p/w500/" + item.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge" style={{marginBottom:5,
            fontWeight:'bolder',
            fontSize:20}} >{item.title}</Text>
            <Text variant="bodyMedium"style={{fontSize:13}} >{item.overview}</Text>
          </Card.Content>
        </Card>
      ))}
      </View>
    </>
  )
}

export default FilmesPopulares