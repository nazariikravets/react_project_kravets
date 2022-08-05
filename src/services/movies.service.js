import {axiosServices} from "./axios.services";

import {urls} from "../constants";


const moviesService ={
    getAllMovies: (page=1)=> axiosServices.get(urls.movies,{params:{page}}),

}

export {moviesService}