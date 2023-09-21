import axios from "axios";
import token from "../token";


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        language: 'pt-BR'
    },
    headers: {
        Authorization: `Bearer ${token}` 
    }
})

export default apiFilmes