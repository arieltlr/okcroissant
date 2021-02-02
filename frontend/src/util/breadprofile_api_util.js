import axios from 'axios';

export const getBreadprofile = (userId) =>{
    return axios.get(`/api/breadprofile/user/${userId}`)
};

export const createBreadprofile = (breadprofile) =>{
    return axios.post(`/api/breadprofile`, breadprofile)
};

export const updateBreadprofile = (breadprofile) =>{
    return axios.post(`/api/breadprofile/${breadprofile.id}`, breadprofile)
};