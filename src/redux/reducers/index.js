import { combineReducers } from '@reduxjs/toolkit';
import modalsReducer from './modalsReducer';
import validationFormReducer from './validationFormReducer';
import addTweetReducer from './addTweetReducer';

export default combineReducers({
    modal: modalsReducer,
    validationForm: validationFormReducer,
    tweets: addTweetReducer
});