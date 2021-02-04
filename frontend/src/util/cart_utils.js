import axios from 'axios';


export const fetchUsersBreads = (userId) => {
    debugger //assuming the key value pair is breadId
    return axios.get(`/api/cartitems/user/${userId}`)
}


export const deleteBreadItem = (breadId) => {
    debugger  //assuming the key value pair is breadId
    return axios.delete(`/api/cartitems/${breadId}`, { data: { breadId: breadId }})
};
