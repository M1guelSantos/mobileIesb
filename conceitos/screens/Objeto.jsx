import React from 'react'
import { Text } from 'react-native'

const Objeto = () => {

    const carros = [
        {marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto'}, 
        {marca: 'GM', modelo: 'Celta', ano: 1990, cor: 'Azul'}, 
        {marca: 'Fiat', modelo: 'Palio', ano: 2005, cor: 'Rosa Choque'}, 
        {marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Prata'}, 
        {marca: 'Ford', modelo: 'Ka da Dona Cleia', ano: 2020, cor: 'Preto'}, 
     ]

    return (
        <>
            {carros.map(item=>(
                <Text>{item.marca} - {item.modelo} - {item.ano} - {item.cor}</Text>
            ))}
        </>
    )
}

export default Objeto