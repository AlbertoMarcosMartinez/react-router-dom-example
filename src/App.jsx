import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import {AuthProvider}   from './contexts/AuthContext'
import DogList from './components/DogList'
import DogDetail from './components/DogDetail'
import DogCharacteristics from './components/DogCharacteristics'
import Login from './components/Login'
import Header from './components/common/Header'
import MainPage from './components/MainPage'
import FAQs from './components/FAQs'
import Contact from './components/Contact'
import MailBox from './components/MailBox'
import ProtectedRoute from './components/ProtectedRoute'
import EnConstruccion from './components/EnConstruccion'
import Modal from './components/Modal'
import Navigation from './components/common/Navigation';

function App() {            
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <div className="App">                        
            <AuthProvider>
                <Header openModal={() => setIsModalOpen(true)} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <Navigation />
                <div className="layout">
                    <main className="main-content">
                                            
                        <Routes>
                            <Route path="/" element={ <MainPage/>} />
                            <Route path="/login" element={<Login />} />                         
                            
                            <Route path="/dogs" element={<ProtectedRoute><DogList /></ProtectedRoute>} />
                            <Route path="/dogs/:name" element={<ProtectedRoute><DogDetail /></ProtectedRoute>}>
                                <Route path="moredetails" element={<DogCharacteristics />} />
                                <Route path="gallery" element={<EnConstruccion name="Gallery" desc="galeria de imágenes"/>} />
                                <Route path="CaresFYPet" element={<EnConstruccion name="CaresFYPet" desc="cuidado de la mascota"/>} />
                            </Route>
                            <Route path="/adopciones" element={<ProtectedRoute><EnConstruccion name="Adopciones" desc="adopciones"/> </ProtectedRoute>} />
                            <Route path="/FAQs" element={<ProtectedRoute><FAQs /></ProtectedRoute>} />
                            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                            <Route path="/mailbox" element={<ProtectedRoute><MailBox /></ProtectedRoute>} />
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>                       
                    </main>
                </div>                
                {isModalOpen && <Modal closeModal={setIsModalOpen} />}
            </AuthProvider>
        </div>  
    )
}

export default App
