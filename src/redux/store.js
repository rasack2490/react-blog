import {legacy_createStore, applyMiddleware, combineReducers, compose} from 'redux';
import articleReducer from './articles/articleReducer';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
    articleReducer
});
const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(rootReducer, ReactReduxDevTools(applyMiddleware(thunk)));


export default store;