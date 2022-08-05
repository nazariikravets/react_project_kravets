import React from 'react';
import './UserInfo.css'


const UserInfo = () => {

    const name='Joe Biden'

    return (
        <div className={'containerm'}>
            <img src="https://file.liga.net/images/general/2021/09/04/20210904143727-5538.jpg" alt={name}/>
            <div>{name}</div>

        </div>
    );
};

export default UserInfo;