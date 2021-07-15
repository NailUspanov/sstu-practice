import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'

const Navbar = () => {
   return (
      <div className={s.navbar}>
         <ul>
            <li><NavLink to="/Profile/17884">Profile</NavLink></li>
            <li><NavLink to="/Messages">Messages</NavLink></li>
            <li><NavLink to="/News">News</NavLink></li>
            <li><NavLink to="/Music">Music</NavLink></li>
            <li><NavLink to="/Settings">Settings</NavLink></li>
             <li><NavLink to="/Users">Users</NavLink></li>
         </ul>
      </div>
   );
}

export default Navbar;
