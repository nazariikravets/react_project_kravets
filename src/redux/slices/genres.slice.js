import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services";


const initialState={
    genre:[]

};

const getGenre = createAsyncThunk(
    'genresSlice/getGenre',
    async ()=>{
        const {data} = await genreService.getGenre();
        return data
    }
);


const  genreSlice= createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers:(builder )=>
        builder
            .addCase(getGenre.fulfilled,(state, action) => {
                state.genre=action.payload.genres
            })
});


const {reducer:genreReducer} = genreSlice;

const genreActions = {
    getGenre

};

export {genreActions,genreReducer}