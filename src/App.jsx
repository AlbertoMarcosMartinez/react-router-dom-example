import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import DogList from './components/DogList'
import DogDetail from './components/DogDetail'
import DogCharacteristics from './components/DogCharacteristics'
import Login from './components/Login'
import Header from './components/common/Header'
import MainPage from './components/MainPage'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import ProtectedRoute from './components/ProtectedRoute'
import {AuthProvider}   from './contexts/AuthContext'

function App() {            

    return (
        <div className="App">                        
            <AuthProvider>
                <Header/>
                <div className="layout">
                    <SideBar />
                    <main className="main-content">                        
                            <Routes>
                            <Route path="/" element={ <MainPage/>} />
                            <Route path="/login" element={<Login />} />                         
                            
                            <Route path="/dogs" element={<ProtectedRoute><DogList /></ProtectedRoute>} />
                            <Route path="/dogs/:name" element={<ProtectedRoute><DogDetail /></ProtectedRoute>}>
                                <Route path="moredetails" element={<DogCharacteristics />} />
                            </Route>
                            <Route path="/FAQs" element={<ProtectedRoute><FAQs /></ProtectedRoute>} />
                            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>                       
                    </main>
                </div>
                
            </AuthProvider>
        </div>  
    )
}

export default App
