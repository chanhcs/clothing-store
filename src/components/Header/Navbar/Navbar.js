import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const navbar = () => {
    return (
        <div className="sticky-top">             
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink to='/' className="nav-link" >Trang chủ <span className="sr-only" >(current)</span> </NavLink>
                        </li>
                        <li className="nav-item active ">
                            <NavLink to={{
                                pathname: '/contact',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} className="nav-link" >Liên hệ <span className="sr-only">(current)</span></NavLink>
                        </li>
                       

                    </ul>

                    

                   
                    {/* <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                        <li className="nav-item active">
                            <a href="/" className="nav-link" >Giỏ hàng<span className="sr-only">(current)</span></a>
                        </li>
                    </ul> */}

                </div>
            </nav>
          
        </div>
    );
}

export default navbar;