import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const initialState = {
    movies: [],
    moviesFilter: [],
    page: 1,
    pagePrev: false


};
const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page}) => {
        const {data} = await moviesService.getAllMovies(page);
        return data

    }
);




const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {

                state.movies = action.payload.results
            })




});


const {reducer: moviesReducer, } = moviesSlice;

const moviesActions = {
    getAll,

};
export {
    moviesActions,

    moviesReducer
}