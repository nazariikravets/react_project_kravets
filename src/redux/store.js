import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slices";
import {genreReducer} from "./slices";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres:genreReducer
});


const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}