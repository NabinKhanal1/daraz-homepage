import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import Register from './pages/Register'
import Login from './pages/Login'



const MyRoute = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Layouts />}>
                        <Route index element={<HomePage />} />
                        <Route path='products' element={<Products/>}/>
                        <Route path='register' element={<Register/>}/>
                        <Route path='login' element={<Login/>}/>

                    </Route>
                </Routes>
            </Router>

        </>
    )
}

export default MyRoute