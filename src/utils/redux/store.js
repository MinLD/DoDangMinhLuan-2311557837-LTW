import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../redux/reducer/rootReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
  persistedReducer, 
  
  composeWithDevTools(applyMiddleware(thunk)),

);
  let persistor = persistStore(store)
  export { store, persistor }
