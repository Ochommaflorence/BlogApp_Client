import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sideBar/SideBar'

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
