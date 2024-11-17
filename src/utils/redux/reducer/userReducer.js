import { FETCH_USER_LOGIN_SUCCESS,FETCH_USER_LOGOUT } from '../action/useAction';
import { INCREMENT, DECREMENT } from '../action/counterAction';

const INITIAL_STATE = {
    account: {
        access_token: '',
        refresh_token: '',
        username: '',
        image: '',
        role:  ''
    },
    isAuthenticated: false   
    
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USER_LOGIN_SUCCESS :
            return {
                ...state, 
                account : {
                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token,
                    username: action?.payload?.DT?.username,
                    image: action?.payload?.DT?.image,
                    role:  action?.payload?.DT?.role
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