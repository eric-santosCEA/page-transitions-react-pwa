import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className="header">
                <NavLink to='/' exact activeStyle={{fontWeight: 'bold', color:'red'}}>
                    Home
                </NavLink>
                <NavLink to='/about' exact activeStyle={{fontWeight: 'bold', color:'red'}}>
                    About
                </NavLink>
                <NavLink to='/our-work' exact activeStyle={{fontWeight: 'bold', color:'red'}}>
                    Our Work
                </NavLink>
                <NavLink to='/join-us' exact activeStyle={{fontWeight: 'bold', color:'red'}}>
                    Join Us!
                </NavLink>
            </div>
        </div>
    )
}
export default Header