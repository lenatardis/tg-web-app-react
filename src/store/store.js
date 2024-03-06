import { combineReducers, configureStore } from '@reduxjs/toolkit';

import userSlice from './user-slice';


const rootReducers = combineReducers({
    user: userSlice
});

export const store = configureStore({
    reducer: rootReducers
});
