import {axiosServices} from "./axios.services";
import {urls} from "../constants";

const genreService={
    getGenre:()=>axiosServices.get(urls.genres)
};

export {genreService}