import { combineReducers } from '@reduxjs/toolkit';
import modalsReducer from './modalsReducer';

export default combineReducers({
    modal: modalsReducer
});