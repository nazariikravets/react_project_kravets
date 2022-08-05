import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'
import UserInfo from "../userInfo/UserInfo";

const Header = () => {
    return (
        <div>
            <div className={'Header'}>
                <NavLink className={'link'} to={'all'}>All Movies</NavLink>
                <UserInfo/>



            </div>
            
        </div>
    );
};

export default Header;