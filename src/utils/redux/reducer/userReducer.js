import { FETCH_USER_LOGIN_SUCCESS, FETCH_USER_LOGOUT, FETCH_USER_INFO_SUCCESS } from '../action/useAction';

const INITIAL_STATE = {
    account: {
        token: '',
        refresh_token: '',
    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS:
            return {
                ...state,
                account: {
                    token: action?.payload?.result?.token,
                    refresh_token: action?.payload?.result?.refresh_token, 
                    
                },
                isAuthenticated: true
            };
        case FETCH_USER_LOGOUT:
            return {
                ...state,
                account: INITIAL_STATE.account,
                isAuthenticated: false
            }; 
        default:
            return state;
    }
};
export default userReducer;
