import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div>
            <div className={css.Header}>
                <NavLink to={'all'}>All Movies</NavLink>



            </div>
            
        </div>
    );
};

export default Header;