import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/Singlepage/Single';
import Write from './pages/Write/Write';
import { Settings } from './pages/Settings/Settings';
import { Login } from './pages/Login/Login';
import { Register } from './pages/Register/Register';


function App() {
  return (
   <div>
     <TopBar/>
     {/* <Home/> */}
     {/* <Write/> */}
     {/* <Settings/> */}
     {/* <Login/> */}
     <Register/>
   </div>
  );
}

export default App;
