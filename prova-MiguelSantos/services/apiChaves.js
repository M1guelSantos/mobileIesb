import axios from "axios";

const apiChaves = axios.create({
    baseURL: 'https://my-json-server.typicode.com/orionteles/chavo',
    params:{
        language: 'pt-BR'
    },
})

export default apiChaves