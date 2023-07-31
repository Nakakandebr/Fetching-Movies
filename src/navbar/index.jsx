import React from "react";
import './style.css'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>
                       M<b>oo</b>vie 
                    </h1>
                </div>
                <div>
                    <form className="search-bar-form">
                        <input id="search-bar" type="text" href="#" placeholder="search ..." />
                        <i class="bi bi-search" className="search-icon" ></i>
                    
                    </form>
                </div>
                <div className="nav-links">
                <li className="home">Home</li>
                <li>Mylist</li>
                <li><button className="sign-in">Sign In</button></li>
                </div>
                
            </nav>
        </>
    );
};

export default Navbar;
