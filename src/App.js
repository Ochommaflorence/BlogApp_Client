import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/Singlepage/Single';
import Write from './pages/Write/Write';
import { Settings } from './pages/Settings/Settings';

function App() {
  return (
   <div>
     <TopBar/>
     {/* <Home/> */}
     {/* <Write/> */}
     <Settings/>
   </div>
  );
}

export default App;
