import axios from 'axios';

export const getBreadprofileResponses = (userId) =>{
    return axios.get(`/api/breadprofile/user/${userId}`)
};

export const createBreadprofile = (breadprofile) =>{
    debugger
    return axios.post(`/api/breadprofile`, breadprofile)
};

export const updateBreadprofile = (breadprofile) =>{
    return axios.post(`/api/breadprofile/${breadprofile.id}`, breadprofile)
};