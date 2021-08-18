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
   <Router>
     <TopBar/>
     <Switch>
       <Route path="/">
       <Home/>
       </Route>

     {/* <Write/> */}
     {/* <Settings/> */}
     {/* <Login/> */}
     </Switch>
     <Register/>
   </Router>
  );
}

export default App;
