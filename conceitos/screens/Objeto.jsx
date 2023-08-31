import React from 'react'
import { Text } from 'react-native'
import { Card } from 'react-native-paper'

const Objeto = () => {

    const carros = [
        { marca: 'VW', modelo: 'Fusca', ano: 1978, cor: 'Preto', foto: 'https://i.pinimg.com/736x/28/ac/cc/28acccdd137b4c0f052d59776234117f.jpg' },
        { marca: 'GM', modelo: 'Celta', ano: 1990, cor: 'Azul', foto: 'https://2.bp.blogspot.com/-tUt-RyThDbc/VVO7C5EgppI/AAAAAAABUSg/5_nweoGY9r8/s1600/resample(lanczos)%2B(1).jpeg' },
        { marca: 'Fiat', modelo: 'Palio', ano: 2005, cor: 'Rosa Choque', foto: 'https://4.bp.blogspot.com/_MGiZcWxFpoc/ShRf19zui3I/AAAAAAAAOnI/3BlvZOVY05E/s280/palio+2.jpg' },
        { marca: 'VW', modelo: 'Gol', ano: 2010, cor: 'Prata', foto: 'https://i.pinimg.com/736x/55/1d/b0/551db086e1c502c00c19e9e6359966f7.jpg' },
        { marca: 'Ford', modelo: 'Ka da Dona Cleia', ano: 2020, cor: 'Preto', foto: 'https://i.ytimg.com/vi/oGdOnAFXVYg/maxresdefault.jpg' },
    ]

    return (
        <>
            {carros.map(item => (
                <Card style={{
                    marginBottom: 10,
                    marginTop: 5,
                    borderRadius: 30,
                    backgroundColor: '#eeeeee'
                }}>
                    <Card.Content>
                        <Card.Cover source={item.foto} />
                        <Text variant="titleLarge"> Marca: {item.marca}</Text>
                        <Text variant="bodyMedium"> Modelo: {item.modelo}</Text>
                        <Text> Cor: {item.cor}</Text>
                    </Card.Content>
                </Card>
            ))}
        </>
    )
}

export default Objeto