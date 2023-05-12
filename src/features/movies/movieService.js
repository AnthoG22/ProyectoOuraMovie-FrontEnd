import axios from "axios"

const API_URL = "https://fine-capris-crab.cyclic.app/ouramovies/api/movies/"

//crear una nueva pelicula

const createMovie = async (movieData, token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL+"create/", movieData, config)
    return response.data
}

//obtener las peliculas
const getMovies = async (token)=> {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL+ "movies", config)
    return response.data
}

//borramos una pelicula
const deleteMovie = async (id,token) => {
    const config = {
        headers:{
            Authorization : `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + "delete/" + id,config)
    return response.data
}

//actualizamos una pelicula
const updateMovie = async (id) => {
    
    const response = await axios.put(API_URL + "update/" + id)
    return response.data
}

const tareaService = {
    createMovie,
    getMovies,
    deleteMovie,
    updateMovie
}

export default tareaService