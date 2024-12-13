import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo } from "utils/redux/action/useAction";

const MyInfoUser =(props)=>{

    const dispatch=useDispatch();
    const  isAuthenticated = useSelector(state=>state.login.isAuthenticated)
    const  account = useSelector(state=>state.user.account)

    // useEffect(()=>{
    //     const handleGetDataUser=async()=>{  
    //         var token1 = localStorage.getItem('token')
    //         console.log('tokenJSON', JSON.parse(token1));
    //         var token= JSON.parse(token1);
    //         if (token && isAuthenticated) {
    //             console.log('token dung')
    //              await getUserInfo(token, dispatch);
               
    //             }
              
    //     } 
    //     const getUserInfo = async (token,dispatch) => {
    //         try {
    //         const response = await axios.get('http://localhost:8080/users/myInfo', {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         if (response.status === 200) {
    //             const data = response.data; 
    //             console.log('user info:', data);
    //             dispatch(fetchUserInfo(data));
    //             console.log('account: ',account)
    //         }
    //         } catch (error) {
    //         console.error('Error fetching user info:', error);
    //         }
    //         }

    //         handleGetDataUser ();
    // },[])

                
//get info user


    return(
        <>
        <div className="container-big">
        <div className="container-sub">
        id: {account.id}<br/>
        email: {account.email} <br/>
        username: {account.username}<br/>
        firstName: {account.firstname}<br/>
        lastname: {account.lastname}<br/>
        ngày sinh: {account.dob}

          
        </div>
        </div>
       
          
        </>
    )
}
export default MyInfoUser