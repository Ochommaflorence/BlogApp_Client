import React from 'react'
import './sideBar.css';

const sideBar = () => {
    return (
        <div className="sideBar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me</span>
                <img src="https://images.pexels.com/photos/859199/pexels-photo-859199.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="sideBarImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nostrum quibusdam, autem explicabo est dolore voluptate reprehenderit tempora eos ad nihil natus quaerat nesciunt reiciendis in vero totam distinctio esse.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i> 
            <i className="sidebarIcon fab fa-twitter-square"></i>
            <i className="sidebarIcon fab fa-pinterest-square"></i>
            <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    )
}

export default sideBar
