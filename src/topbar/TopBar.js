import React from 'react'
import "./topBar.css";

const TopBar = () => {
    return (
        <div className="top">
            <div className="topLeft">
            <i class="fab fa-facebook-square"></i> 
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-pinterest-square"></i>
            <i class="fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">Home</li>
                    <li className="topListItem">About</li>
                    <li className="topListItem">Contact</li>
                    <li className="topListItem">Write</li>
                    <li className="topListItem">LogOut</li>
                </ul>
            </div>
            <div className="topRight">r</div>
        </div>
    )
}

export default TopBar
