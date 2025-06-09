/**
 * Configuración principal de la aplicación
 * 
 * Características:
 * - Routing con React Router 6
 * - Múltiples providers anidados
 * - Layouts compartidos
 * - Rutas protegidas
 * 
 * Alternativas consideradas:
 * 1. TanStack Router para type-safe routing
 * 2. Next.js para SSR y file-based routing
 * 3. Lazy loading de rutas para mejor performance
 */

import './App.css'
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider }   from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext';
import { DogBreedsProvider } from './contexts/DogBreedsContext';
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
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import AdoptionList from './components/AdoptionList'
import DogAdoptionDetail from './components/DogAdoptionDetail'
import DogGallery from './components/DogGallery';

function App() {            
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => setIsDarkMode(prev => !prev);

    return (
        <div className="App">                        
            <ThemeProvider>
                <AuthProvider>
                    <DogBreedsProvider>
                        <Routes>
                            <Route
                                path="/login"
                                element={
                                    <PublicLayout>
                                        <Login />
                                    </PublicLayout>
                                }
                            />
                            <Route
                                path="*"
                                element={
                                    <PrivateLayout
                                        openModal={() => setIsModalOpen(true)}
                                        isDarkMode={isDarkMode}
                                        toggleTheme={toggleTheme}
                                    >
                                        <Routes>
                                            <Route path="/" element={<MainPage />} />
                                            <Route path="/dogs" element={<ProtectedRoute><DogList /></ProtectedRoute>} />
                                            <Route path="/dogs/:name" element={<ProtectedRoute><DogDetail /></ProtectedRoute>}>
                                                <Route path="moredetails" element={<DogCharacteristics />} />
                                                <Route path="gallery" element={<DogGallery />} />
                                                {/* <Route path="gallery" element={<EnConstruccion name="Galería" desc="Galería de fotos"/>} /> */}
                                                <Route path="CaresFYPet" element={<EnConstruccion name="CaresFYPet" desc="cuidado de la mascota"/>} />
                                            </Route>
                                            {/* <Route path="/adopciones" element={<ProtectedRoute><EnConstruccion name="Adopciones" desc="adopciones"/> </ProtectedRoute>} /> */}
                                            <Route path="/adopciones" element={<ProtectedRoute><AdoptionList /></ProtectedRoute>} />
                                            <Route path="/adopcion/:id" element={<DogAdoptionDetail />} />
                                            <Route path="/FAQs" element={<ProtectedRoute><FAQs /></ProtectedRoute>} />
                                            <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
                                            <Route path="/mailbox" element={<ProtectedRoute><MailBox /></ProtectedRoute>} />
                                            <Route path="*" element={<h1>404 Not Found</h1>} />
                                        </Routes>
                                        {isModalOpen && <Modal closeModal={setIsModalOpen} />}
                                    </PrivateLayout>
                                }
                            />
                        </Routes>
                    </DogBreedsProvider>
                </AuthProvider>
            </ThemeProvider>
        </div>  
    )
}

export default App
