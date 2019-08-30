import React from 'react';
import {Link, N} from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
   return (
       <nav className="navbar navbar-default">
           <div className="container">
               <div className="navbar-header">
                   <ul className="nav nav-link">
                   <li><a href="https://design-your-life-fe.netlify.com/index.html">HOME</a></li>
                   <li><a href="https://design-your-life-fe.netlify.com/about.html">ABOUT</a></li>
                   <li><a href="https://design-your-life-fe.netlify.com/index.html">SIGNOFF</a></li>
                   </ul>
               </div>
           </div>
       </nav>
   )
}
export default NavBar;
