import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './component/Login'
import Register from './component/Register'
import DashBoard from './component/DashBoard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>} />

      <Route  path='/dashboard' element={<DashBoard />} />

      <Route   path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
