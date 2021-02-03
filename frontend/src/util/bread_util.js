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
    debugger
    const totalqueryString = `thin=${breadData.thin}&wholewheat=${breadData.wholewheat}&savory=${breadData.savory}&filling=${breadData.filling}`
    return axios.get(`/api/breads/matches?${totalqueryString}`)
}