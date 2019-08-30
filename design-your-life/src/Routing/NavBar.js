import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav nav-link">
                        <li ><Link to={"/home"}>HOME</Link></li>
                        <li><Link to={"/about"}>ABOUT</Link></li>
                       <li><Link to={"/home"}>SIGNOFF</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;
