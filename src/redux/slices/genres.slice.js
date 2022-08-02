import { createSlice} from "@reduxjs/toolkit";
const initialState={

};

const  genreSlice= createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{},
    extraReducers:(builder )=>
        builder
});


const {reducer:genreReducer} = genreSlice;

const genreActions = {

};

export {genreActions,genreReducer}