import axios from 'axios';

// bread index
export const fetchBreads = () => {
    return axios.get('/api/breads/')
}

// bread show 
export const fetchBread = breadId => {
    return axios.get(`/api/breads/${breadId}`)
}

//bread suggestion based on profile 
export const fetchSuggestedBreads = (breadData) => {
    return axios.get(`/api/breads/matches`, breadData)
}