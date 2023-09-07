import React, { useState } from 'react'
import { TextInputBase, View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import styles from '../styles/styles'


const Estado = () => {

    const[qtd, setQtd] = useState(0)

    return (
        <>
        <Text style={styles.espacamento}>Contador Feliz</Text>
        <View style={styles.linha}> 
            <Button mode='contained' onPress={()=>setQtd(qtd-1)}>-</Button>

            <Text style={styles.espacamento}>{qtd}</Text>

            <Button  mode='contained' onPress={()=>setQtd(qtd+1)}>+</Button>

        </View>
        </>
    )
}

export default Estado

