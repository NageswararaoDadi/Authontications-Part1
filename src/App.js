import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from './component/Login'
import Register from './component/Register'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login/>} />
      <Route  path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
