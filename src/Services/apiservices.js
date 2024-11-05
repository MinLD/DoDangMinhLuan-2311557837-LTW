import axios from "../utils/axiosCustomize";
const postCreateUser=(Email,Password,Username,Role,Images)=>{
    const data = new FormData();
    data.append('email', Email);
    data.append('password', Password);
    data.append('username',  Username);
    data.append('role',  Role);
    data.append('userImage',  Images);
    return axios.post('api/v1/participant', data)
}
const getAllUsers=()=>{
return axios.get('api/v1/participant/all')
}
export {postCreateUser,getAllUsers};