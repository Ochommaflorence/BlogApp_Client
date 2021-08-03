import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/Singlepage/Single';
import Write from './pages/Write/Write';

function App() {
  return (
   <div>
     <TopBar/>
     {/* <Home/> */}
     <Write/>
   </div>
  );
}

export default App;
