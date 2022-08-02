import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const initialState={
    movies:[],
    page:1


};
const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async ({page})=>{
        const {data} = await moviesService.getAllMovies(page);
        return data

    }

);



const moviesSlice = createSlice({
    name:'moviesSlice',
    initialState,
    reducers:{
        page:((state, action) => {
            state.page=action.payload
        })
    },
    extraReducers:(builder) =>
        builder
            .addCase(getAll.fulfilled,(state, action) => {

                state.movies=action.payload.results
            })





});


const {reducer:moviesReducer, actions:{page}}=moviesSlice;

const moviesActions={
getAll
};
export {
    moviesActions,
    page,
    moviesReducer
}