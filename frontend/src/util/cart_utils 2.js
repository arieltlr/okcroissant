import axios from 'axios';


export const fetchUsersBreads = (userId) => {
    //   //assuming the key value pair is breadId
    return axios.get(`/api/cartitems/user/${userId}`)
}

// create
export const createCartItem = (data) => {
    //  
    return axios.post("/api/cartitems/", data)
}

export const deleteBreadItem = (breadId) => {
    //    //assuming the key value pair is breadId
    return axios.delete(`/api/cartitems/${breadId}`)
};
