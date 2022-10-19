import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import Main from  './components/pages/main'
import Data from './components/pages/data'
import Register from './components/pages/register'
import Login from './components/pages/login'

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/insercao/:id/registro-de-mutantes" element={<Main/>} />
          <Route exact path="/lista-de-mutantes/:id" element={<Data/>} />
          <Route exact path="/cadastro" element={<Register/>} />
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    );
}

