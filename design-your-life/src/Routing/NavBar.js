NavBar.js
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './NavBar.css';
import SignupForm from '../Authentication/SignupForm';
import LoginForm from '../Authentication/LoginForm';
import JournalForm from '../JournalComponents/JournalForm';


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
                  <Link className="i-link" to="/login">LOGIN</Link>
                  <Link className="i-link" to="/signup">SIGNUP</Link>
                  <Link className="i-link" to="/journal">TRY IT</Link>
                  </div>
                </div>
            
        </nav>
    )
}
export default NavBar;

