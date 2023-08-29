import React from 'react'
import { Button } from 'react-native'
import {Card, Text } from 'react-native-paper'

const Pagina1 = ({navigation}) => {

  return (
    <>
    <Button title='Pagina1' onPress={()=>navigation.navigate('Pagina1')}></Button>
    <Button title='Pagina2' onPress={()=>navigation.navigate('Pagina2')}></Button>
      <Card >
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
        </Card.Actions>
      </Card>
      
      </>
  )
}

export default Pagina1