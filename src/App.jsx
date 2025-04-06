import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import DogList from './components/DogList'
import DogDetail from './components/DogDetail'
import DogCharacteristics from './components/DogCharacteristics'
// import DogCare from './components/DogCare'
// import DogGallery from './components/DogGallery'

function App() {   
    return (
        <div className="App">
            <header className="App-header">
                <h2>React Router Example</h2>
            </header> 
            <div className="layout">
                <SideBar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<h1>Home Page</h1>} />
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
            <Footer />
        </div>  
    )
}

export default App
