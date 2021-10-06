import {combineReducers} from 'redux'
import { createStore,applyMiddleware } from 'redux'
import thunk from' redux-thunk'
import {composewithDevTools} from 'redux-devtools-extension'
import { getAllPizzasReducer } from './reducers/pizzaReducers'

const finalReducer =combineReducers({
    getAllPizzasReducer:getAllPizzasReducer


})
const initialstate={}
const composeEnhancers=composewithDevTools({})
const store=createStore(finalReducer,initialstate,composeEnhancers(applyMiddleware(thunk)))