import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleLg ml-5">Blog App</span>
            </div>
            <img className="headerImg" src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="headerImg" />
        </div>
    )
}

export default Header
