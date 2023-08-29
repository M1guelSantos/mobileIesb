import React from 'react'
import { Text } from 'react-native'

const Array = () => {
    const carros = ['Fusca', 'Celta', 'Palio', 'Gol', 'Ka da Dona Cleia']


    return (
        <>
            {carros.map(c =>(
                <Text>{c}</Text>
            ))}
        </>
    )
}

export default Array