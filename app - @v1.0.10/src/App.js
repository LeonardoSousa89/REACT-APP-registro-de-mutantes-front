import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import Main from  './components/pages/main'
import Data from './components/pages/data'

export default function App(){
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/lista-de-mutantes" element={<Data/>} />
      </Routes>
    </BrowserRouter>
    );
}

