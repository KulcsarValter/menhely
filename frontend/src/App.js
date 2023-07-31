import React from 'react'
import AdminForm from './AdminForm'
import Main from './Main'
import Allatok from './Allatok'
import Kapcsolat from './Kapcsolat'
import Kutyak from './Kutyak'
import Macskak from './Macskak'
import OrokbefogadasForm from './OrokbefogadasForm'
import Todo from './Todo'

import 'tachyons'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/todo' element={<Todo />}></Route>
        <Route path='/admin' element={<AdminForm />}></Route>
        <Route path='/allatok' element={<Allatok />}></Route>
        <Route path='/kutyak' element={<Kutyak />}></Route>
        <Route path='/macskak' element={<Macskak />}></Route>
        <Route path='/kapcsolat' element={<Kapcsolat />}></Route> 
        <Route path='/orokbefogadas' element={<OrokbefogadasForm />}></Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App