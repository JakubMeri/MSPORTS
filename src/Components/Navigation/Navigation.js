import React, { useState } from 'react'
import {
    Link, NavLink
  } from "react-router-dom";
import './Navigation.css'

export default function Navigation() {

    const [menu, setMenu] = useState(false);
    
    const showMenu = () => {
        let set = !menu;
        setMenu(set)
    }

    return (
        <div>
            <button onClick={showMenu} className="btn">{!menu ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</button>
            <Link to="/MSPORTS" className="mobile-logo">MSPORTS</Link>
            <nav className={menu ? "show" : " hide"}>
            <Link  to="/MSPORTS" className="logo">MSPORTS</Link>
            <NavLink onClick={showMenu} activeClassName="active" exact to="/MSPORTS" className="nav-item">Home</NavLink>
            <NavLink onClick={showMenu} activeClassName="active"  to="/BMR" className="nav-item">Bmr Calculator</NavLink>
            <NavLink onClick={showMenu} activeClassName="active"  to="/YourData" className="nav-item">Your Data</NavLink>
        </nav>
        </div>
    )
}
