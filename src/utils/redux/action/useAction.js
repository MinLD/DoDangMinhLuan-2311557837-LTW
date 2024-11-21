export const FETCH_USER_LOGIN_SUCCESS='FETCH_USER_LOGIN_SUCCESS'
export const doLogin= (Data)=> {
    return{
        type: FETCH_USER_LOGIN_SUCCESS,
        payload: Data
    }
}
export const FETCH_USER_LOGOUT = 'FETCH_USER_LOGOUT';
export const userLogout = () => ({
    type: FETCH_USER_LOGOUT,
});
