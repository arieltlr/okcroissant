import axios from 'axios';

export const getBreadprofileResponses = (userId) =>{
    return axios.get(`/api/breadprofile/user/${userId}`)
};

export const createBreadprofile = (breadprofile) =>{
    return axios.post(`/api/breadprofile`, breadprofile)
};

export const updateBreadprofile = (breadprofile) =>{
    return axios.patch(`/api/breadprofile/${breadprofile.id}`, breadprofile)
};