import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'

const Card = () => {
    return (
        <>
            <View style={styles.card}>
                <Text style={styles.titulo}>MIGUELDOIDAO</Text>
                <Text>Isto e um paragrafo</Text>
                <Text>Isto e um paragrafo</Text>
                <Text>Isto e um paragrafo</Text>
            </View>
        </>
    )
}
export default Card


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      borderWidth: 2,
      borderRadius : 1,
      borderStyle: 'solid',
      marginBottom: 20
    },
    titulo:{
      color:'white',
      fontSize: 25,
      padding: 20,
      borderBottomWidth: 2,
      borderBottomCollor: 'red',
      borderBottomStyle: 'solid',
      textAlign: 'center', 
      backgroundColor: '#ccc'
    }
  });
  
