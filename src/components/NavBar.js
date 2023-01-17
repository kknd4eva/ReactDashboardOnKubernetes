import React from "react";
import "./NavBar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#" className="active">Contact</a>
        </div>
    );
}

export default Navbar;
