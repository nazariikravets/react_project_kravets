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
        page: ((state, action) => {
                state.page = action.payload
            }
        ),
        pagePrev: ((state, action) => {
            if (page < 2) {
                state.pagePrev = true
            }
        })
    },
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {

                state.movies = action.payload.results
            })
            .addCase(getFilterMovies.fulfilled, (state, action) => {
                state.moviesFilter = action.payload.results
            })


});


const {reducer: moviesReducer, actions: {page}} = moviesSlice;

const moviesActions = {
    getAll,

};
export {
    moviesActions,

    moviesReducer
}