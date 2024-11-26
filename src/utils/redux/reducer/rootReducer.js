    import { combineReducers } from 'redux';
    import userReducer from './userReducer';
    import infoUserReducer from './InfoUserReducer';
    const rootReducer = combineReducers({
    
        user: infoUserReducer,
        login: userReducer, 
    });

    export default rootReducer;