import './settings.css'
import SideBar from '../../components/sideBar/SideBar'

export const Settings = () => {
    return (
        <div className="settings"> 
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete  Account</span>
                </div>
                <form  className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500l" alt="" />
                        <label htmlFor="fileInput">
                        <i className="far fa-user-circle"></i>
                        </label>
                    </div>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
