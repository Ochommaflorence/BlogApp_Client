import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sideBar/SideBar'

import './Home.css'

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="home">
            <Posts/>
            <SideBar/>
            </div>
        </div>
    )
}

export default Home
