        import Password from "antd/es/input/Password";
import axios from "../utils/axiosCustomize";
        const postCreateUser=(email,password,username,role,image)=>{
            const data = new FormData();
            data.append('email', email);
            data.append('password', password);
            data.append('username',  username);
            data.append('role',  role);
            data.append('userImage',  image);
            return axios.post('api/v1/participant', data)
        }
        const getAllUsers=()=>{
        return axios.get('api/v1/participant/all')
        }
        const putUpdateUser=(id,username,role,image)=>{
            const data = new FormData();
            data.append('id',  id);
            data.append('username',  username);     
            data.append('role',  role);
            data.append('userImage',  image);
            return axios.put('api/v1/participant', data)
        }
        const putViewUser=(id,username,role,image,email,password,)=>{
            const data = new FormData();
            data.append('id',  id);
            data.append('username',  username);     
            data.append('role',  role);
            data.append('userImage',  image);
            return axios.put('api/v1/participant', data)
        }
        const deleteUsers=(userId)=>{
            return axios.delete('api/v1/participant',{data: {id: userId}})
            }
        const getUserWithPaginate=(page,limit)=>{
                return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
                }
        const postLoin=(userEmail,userPassword)=> {
            return axios.post(`api/v1/login`, 
                {email: userEmail, password: userPassword});
        } 
        export {postCreateUser,getAllUsers,putUpdateUser,putViewUser,deleteUsers,getUserWithPaginate, postLoin};