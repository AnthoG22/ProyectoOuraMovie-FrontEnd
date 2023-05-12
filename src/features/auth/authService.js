import axios from 'axios'

const API_URL = "https://fine-capris-crab.cyclic.app/ouramovies/api/users/"

//REGISTRAR UN USUARIO

const register = async(userData) => {
    const response = await axios.post(API_URL , userData )

    return response.data
}

const login = async(userData) => {
    const response = await axios.post(API_URL + 'login',userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService