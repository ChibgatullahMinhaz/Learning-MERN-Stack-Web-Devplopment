import React from 'react';
import { NavLink } from 'react-router';
// import Bb from "./bb.css"

const navbea = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to="/">Home</NavLink>
                </li>
            <li>
                <NavLink to="/MyBookings">My-Bookings</NavLink>
            </li>
            <li>
                <NavLink to="/Proshno">Blogs</NavLink>
                </li>
            <li>
                <NavLink to="/ErrorPage">Contact Us</NavLink>
                </li>
            </ul>
          </div>
        <div className='flex '>
        <img src="https://i.ibb.co.com/dsqrK5Zy/logo.png" className='w-8 h-8' />
        <a className="font-bold text-2xl">Law.BD</a>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='Active'>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/My-Bookings">My-Bookings</NavLink>
            </li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink>
                </li>
            <li>
                <NavLink to="/ErrorPage">Contact Us</NavLink>
                </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <button className="btn bg-green-600 text-white rounded-4xl">Contact Now</button>
        </div>
      </div>
    );
};

export default navbea;


