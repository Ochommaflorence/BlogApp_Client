import React from "react";
import { Link } from "react-router-dom";
import "./topBar.css";

const TopBar = () => {
    const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="Link">Home</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="Link">About</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="Link">Contact</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="Link">Write</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="Link"> LogOut </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500l"
          alt="logo"
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
