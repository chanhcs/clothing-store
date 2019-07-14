import React from 'react';
import './Header.css';
const header = () => {
    return (
        <div>
            <nav className="zone green">
                <ul className="main-nav">
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About</a></li>
                    <li className="push"><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default header;