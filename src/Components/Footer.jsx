import React from 'react';
import { NavLink } from 'react-router';
import { CiShoppingCart } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav>
                
                <NavLink className={({isActive})=> isActive? 'text-indigo-600': '' }  to='/'  > Home</NavLink>
                <NavLink className={({isActive})=> isActive? 'text-indigo-600': '' }  to='/about'  >About</NavLink>
            </nav>
            <nav>
              
                <NavLink className={({isActive})=> isActive? 'text-indigo-600': '' }  to='/cart'   ><CiShoppingCart /></NavLink>
            </nav>
            <nav>
               
                <NavLink className={({isActive})=> isActive? 'text-indigo-600': '' }  to='/favourites'  ><CiBookmarkPlus /></NavLink>
            </nav>
            </footer>
        </div>
    );
};

export default Footer;