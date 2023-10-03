import React, { useEffect, useState } from 'react'
import { Card, Divider, Text } from 'react-native-paper'
import apiChaves from '../services/apiChaves'
import { ScrollView } from 'react-native'

const PersonsDetalhes = ({ navigation, route }) => {

    const [personagem, setPersonagem] = useState([])
    const [frases, setFrases] = useState([])
    useEffect(() => {
        const id = route.params.id
        apiChaves.get(`/personagens/${id}`).then(resultado => {
            setPersonagem(resultado.data);
        })
        apiChaves.get(`/bordoes?personagem_id=${id}`).then(resultado => {
            setFrases(resultado.data);
        })
    }, [])


    return (
        <>
        <ScrollView>
            <Card mode="outlined"
                style={{ margin: 10 }}
            >
                <Card.Cover source={{ uri: personagem.urlImagem }} style={{ height: 350 }} />
                <Card.Content>
                    <Text variant="titleLarge" style={{
                        marginBottom: 5,
                        fontSize: 13
                    }}>
                    </Text>
                    <Text variant="bodyMedium" style={{ fontSize: 20 }}><strong>{personagem.nome}</strong></Text> <br></br>
                    <Text variant="bodyMedium">{personagem.biografia}</Text>
                </Card.Content>

            </Card>
            <Card mode="outlined"
                style={{ margin: 10 }}
            >
                <Card.Cover source={{ uri: personagem.urlImagemCrianca }} style={{ height: 350 }} />
                <Card.Content>
                    <Text variant="titleLarge" style={{
                        marginBottom: 5,
                        fontSize: 13
                    }}>
                    </Text>
                    <Text variant="bodyMedium"><strong>idade: </strong>{personagem.idade}</Text>
                    <Text variant="bodyMedium"><strong>sexo: </strong> {personagem.sexo}</Text>
                    <Text variant="bodyMedium"><strong>endereço: </strong> {personagem.endereco}</Text>
                </Card.Content>
            </Card>

            <Text style={{
                color: 'red',
                fontSize: 20,
                fontWeight: 'bolder',
                textAlign: 'center',
                marginTop: 10
            }}> Frases: </Text>

            <Card mode="outlined" style={{ margin: 10,
            height: 400
             }}>
                {frases.map(item => (

                    <Card.Content>
                        <Text variant="titleLarge" style={{
                            marginBottom: 11,
                        }}> 

                        </Text>
                        <Text variant="bodyMedium" style={{fontSize:15,
                        textAlign: 'center',
                        padding: 1
                       }}>{item.bordao}</Text>
                        <Divider/>
                    </Card.Content>
                ))}
            </Card>
            </ScrollView>
        </>
    )
}

export default PersonsDetalhes