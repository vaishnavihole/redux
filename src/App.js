import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Card from './Pages/Card';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/card' element={<Card/>} />
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
