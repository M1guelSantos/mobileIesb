import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const Pagina2 = () => {

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

  return (
    <>
      <Card >
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content>
          <Text variant="titleLarge">Card title</Text>
          <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
      
      </>
  )
}

export default Pagina2