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
import LoginButton from './components/buttons/LoginButton'
import {AuthProvider}   from './contexts/AuthContext'

// import {useAuth0} from '@auth0/auth0-react'
// import DogCare from './components/DogCare'
// import DogGallery from './components/DogGallery'

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
                            <Route path="/dogs" element={<DogList />} />
                            <Route path="/dogs/:name" element={<DogDetail />}>
                                <Route path="moredetails" element={<DogCharacteristics />} />
                            </Route>
                            <Route path="/page2" element={<h1>Page 2</h1>} />
                            <Route path="/page3" element={<h1>Page 3</h1>} />
                            <Route path="/contact" element={<h1>Contact Page</h1>} />
                            <Route path="*" element={<h1>404 Not Found</h1>} />
                        </Routes>                       
                    </main>
                </div>
                
            </AuthProvider>
        </div>  
    )
}

export default App
