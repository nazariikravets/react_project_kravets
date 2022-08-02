import axios from "axios";
import {baseURL} from "../constants";
import {getToken} from "./auth.service";

const axiosServices = axios.create({baseURL});

 axiosServices.interceptors.request.use((config) => {
     const access = getToken();

     if (access) { config.headers.Authorization = `Bearer ${access}`
     }
     return config
 })

export {axiosServices}