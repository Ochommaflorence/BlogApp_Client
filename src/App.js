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
  const user = true;
  return (
   <Router>
     <TopBar/>
     <Switch>
       <Route exact path="/">
       <Home/>
       </Route>

       <Route  path="/register">
       {user ? <Home/> : <Register/>}
       </Route>

       <Route  path="/login">
       {user ? <Home/> : <Login/>}
       </Route>
       
       <Route path="/write">
       <Write/>
       </Route>

       <Route path="/settings">
       <Settings/>
       </Route>
    
       <Route path="/post/:postId">
       <Single/>
       </Route>
     </Switch>
     <Register/>
   </Router>
  );
}

export default App;
