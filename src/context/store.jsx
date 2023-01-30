import {applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducers from '../reducers'


import { configureStore } from '@reduxjs/toolkit'



const initialSatate = {};
const middleware = [thunk];
const store = configureStore({ reducer: rootReducers }, initialSatate, composeWithDevTools(applyMiddleware(...middleware)))


export default store;

