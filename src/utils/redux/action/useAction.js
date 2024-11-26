export const FETCH_USER_LOGIN_SUCCESS='FETCH_USER_LOGIN_SUCCESS'
export const doLogin= (data)=> {
    return{
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: data
    }
}

export const FETCH_USER_LOGOUT = 'FETCH_USER_LOGOUT';
export const userLogout = () => ({
    type: FETCH_USER_LOGOUT,
});


export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS';
export const fetchUserInfo = (data) => {
     return {
         type: FETCH_USER_INFO_SUCCESS, 
         payload: data 
        };
     };