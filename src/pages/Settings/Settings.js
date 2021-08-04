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
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
