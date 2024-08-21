import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Oferta from './Oferta'
import Produtos from './Produtos'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/oferta" element={<Oferta/>}/>
      <Route path ="/" element={<Produtos/>}/>
    </Routes>

    </BrowserRouter>
    
  </React.StrictMode>,
)



