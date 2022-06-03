import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';
import { getLocalTweets, setLocalTweets } from '../utils/localStorageFunctions';

const preloadedState = getLocalTweets();

const store = configureStore({
    reducer,
    preloadedState,
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

store.subscribe(() => {
    setLocalTweets({
        tweets: store.getState().tweets
    });
})

export default store;