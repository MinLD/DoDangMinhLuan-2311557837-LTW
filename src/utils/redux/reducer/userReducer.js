import { FETCH_USER_LOGIN_SUCCESS,FETCH_USER_LOGOUT } from '../action/useAction';
import { INCREMENT, DECREMENT } from '../action/counterAction';
import Password from 'antd/es/input/Password';

const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        firstname: '',
        lastname:  '',
        password: '',
        email: '',
        dob: ''
    },
    isAuthenticated: false   
    
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS :
            return {
                ...state, 
                account : {
                    access_token: action?.payload?.result?.access_token, 
                    refresh_token: action?.payload?.result?.refresh_token, 
                    username: action?.payload?.result?.username, 
                    firstName: action?.payload?.result?.firstName, 
                    lastName: action?.payload?.result?.lastName, 
                    email: action?.payload?.result?.email, 
                    dob: action?.payload?.result?.dob, 
                    id: action?.payload?.result?.id, 
                    roles: action?.payload?.result?.roles,
                              
                },
                isAuthenticated: true  
            };

            case FETCH_USER_LOGOUT: // Thêm action cho đăng xuất
            return {
                ...state,
                account: INITIAL_STATE.account, // Đặt lại thông tin tài khoản
                isAuthenticated: false // Đặt isAuthenticated thành false khi đăng xuất
            };


        case DECREMENT:
            return {
                ...state, count: state.account - 1,
            };
        default: return state;
    }
};

export default userReducer;