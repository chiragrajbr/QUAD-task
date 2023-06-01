import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home page/Home'
import Deatils from './Home page/Details/Details'
import Form from './Home page/Form'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail' element={<Deatils/>}/>
        <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App