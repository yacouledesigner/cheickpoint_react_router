import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/Cours">cours</Link></li>
                <li><Link to="/Formation">formation</Link></li>
                <li><Link to="/Service">service</Link></li>
                <li><Link to="/About">about</Link></li>
                <li><Link to="/Contact">contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
