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
                        <img src="https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="settingsImg" />
                        <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:'none'}} />
                    </div>
                      <label>Username</label>
                      <input type="text" placeholder="florrie" />
                      <label>Email</label>
                      <input type="text" placeholder="florrie@gmail.com" />
                      <label>Password</label>
                      <input type="password" />
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
