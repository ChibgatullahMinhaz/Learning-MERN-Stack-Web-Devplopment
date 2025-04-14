import React from 'react';
import { Link,NavLink } from 'react-router';

const Nav = () => {
    return (
        <div>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/laptops'>Laptops</NavLink>
            <NavLink to='/blogs'>Blogs</NavLink>
            <NavLink to='/Users'>users</NavLink>
            <NavLink to='/Users2'>User2</NavLink>
            <NavLink to='/posts'>Posts</NavLink>
            
            </nav>  
        </div>
    );
};

export default Nav;