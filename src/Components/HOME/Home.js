import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="Home">
            <div className="overlay"></div> 

            <h1 className="home-quotes">ALWAYS WORK ON YOUR SELVE</h1>   
            <Link to='/BMR' className="btn-link">Continue</Link>
            
        </div>
    )
}
