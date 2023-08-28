import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const Pagina3 = () => {

    const LeftContent = props => <Avatar.Icon {...props} icon="account" />

    const id = [
        {id: 1, name: 'Miguel', descricao: 'Aluno'},
        {id: 2, name: 'Joao', descricao: 'Aluno'},
        {id: 3, name: 'Orion Teles', descricao: 'Professor'},
        {id: 4, name: 'Vaz Viadim', descricao: 'Aluno'},
        {id: 5, name: 'Fernado', descricao: 'Noia'},
        {id: 6, name: 'Pedro', descricao: 'Gay'}
    ]
    
    return (
        <>
            {id.map(nome => (
                <Card style={{ marginBottom: 15 }}>
                    <Card.Title title={nome.name} subtitle={nome.descricao} left={LeftContent}/>
                </Card>
            ))}
        </>
    )
}

export default Pagina3