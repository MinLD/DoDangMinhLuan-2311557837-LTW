import { FETCH_USER_LOGIN_SUCCESS, FETCH_USER_LOGOUT, FETCH_USER_INFO_SUCCESS } from '../action/useAction';
const INITIAL_STATE = {
    account: {
        id: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        dob: '',

    },
    isAuthenticated: false
};
const infoUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
       
        case FETCH_USER_INFO_SUCCESS:
        
            return { 
                ...state, 
                account: { 
                    ...state.account, 
                    id: action?.payload?.result?.id,
                    firstname: action?.payload?.result?.firstName, 
                    lastname: action?.payload?.result?.lastName,
                    username: action?.payload?.result?.username,
                    email: action?.payload?.result?.email, 
                    dob: action?.payload?.result?.dob, 
                    
                    }, 
                    isAuthenticated: true };
        default:
            return state;
    }
};
export default infoUserReducer;
