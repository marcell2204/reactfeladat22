import React from 'react';
import './styles.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#add-user">Hozzáadás</a></li>
                <li><a href="#list-users">Kilistázás</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;