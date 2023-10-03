import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Card from './Pages/Card';
import Navbar from './components/Navbar'


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/card' element={<Card/>} />
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
