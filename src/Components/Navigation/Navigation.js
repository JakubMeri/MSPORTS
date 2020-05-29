import React from 'react'
import {
    Link, NavLink
  } from "react-router-dom";
import './Navigation.css'

export default function Navigation() {
    return (
        <nav>
            <Link  to="/Home" className="logo">MSPORTS</Link>
            <NavLink activeClassName="active" exact to="/Home" className="nav-item">Home</NavLink>
            <NavLink activeClassName="active"  to="/BMR" className="nav-item">Bmr Calculator</NavLink>
            <NavLink activeClassName="active"  to="/About" className="nav-item">About</NavLink>
        </nav>
    )
}
