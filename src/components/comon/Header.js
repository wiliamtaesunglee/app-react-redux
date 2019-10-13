import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
    const activeStyle = { color: '#f15b2a' }
    
    return(
        <div>
            <NavLink to="/" style={activeStyle} exact>Home</NavLink>
                {" | "}
            <NavLink to="about" style={activeStyle}>About</NavLink>
                {" | "}
            <NavLink to="courses" style={activeStyle}>courses</NavLink>
        </div>
    )
}

export default Header