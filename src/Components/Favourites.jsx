import React from 'react';
import { Outlet } from 'react-router';

const Favourites = () => {
    return (
        <div>
            fav
            <Outlet />
        </div>
    );
};

export default Favourites;