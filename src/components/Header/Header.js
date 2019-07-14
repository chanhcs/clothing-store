import React from 'react';
import './Header.css';
import Navbar from './Navbar/Navbar';
const header = () => {
    return (
        <div>     
            <Navbar />
            <div className="header"/>              
        </div>
    );
}

export default header;