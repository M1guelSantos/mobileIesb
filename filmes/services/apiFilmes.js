import axios from "axios";


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        language: 'pt-BR'
    },
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTdhOGY4MGYzZGUwNTIxMzgzZTA3ODIzNGY2M2E1YSIsInN1YiI6IjY0MzQ4ZDU4MWY5OGQxMDIyMjIyNGE3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQaVHL5bDECDMlSvCXYXsUreHFupiR1WLq8U7GVx0hs` 
    }
})

export default apiFilmes