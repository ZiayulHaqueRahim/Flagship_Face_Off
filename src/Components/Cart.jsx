import React from 'react';
import { Outlet } from 'react-router';

const Cart = () => {
    return (
        <div>
            cart
            <Outlet />
        </div>
    );
};

export default Cart;