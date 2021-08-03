import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/Singlepage/Single';

function App() {
  return (
   <div>
     <TopBar/>
     {/* <Home/> */}
     <Single/>
   </div>
  );
}

export default App;
