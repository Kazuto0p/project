
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import New from './components/New';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      
      
      <Routes>
      
        <Route path='New'element={<New/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
