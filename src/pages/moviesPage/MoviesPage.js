import React from 'react';
import {Outlet} from "react-router-dom";


import Header from "../../components/header/Header";


const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>


            
        </div>
    );
};

export default MoviesPage;