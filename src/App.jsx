import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import Footer from './components/Footer'
import DogList from './components/DogList'
import DogDetail from './components/DogDetail'
import DogCharacteristics from './components/DogCharacteristics'
import Header from './components/common/Header'
import LoginButton from './components/buttons/LoginButton'
// import {useAuth0} from '@auth0/auth0-react'
// import DogCare from './components/DogCare'
// import DogGallery from './components/DogGallery'

function App() { 
    
    // const { isAuthenticated } = useAuth0();    

    return (
        <div className="App">            
            {/* {isAuthenticated && <Header/>} */}
            <Header />
            <div className="layout">
                {/* {isAuthenticated && <SideBar />} */}
                <SideBar/>
                <main className="main-content">
                    {/* {isAuthenticated ?( */}
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
                    {/* ):(
                        <div className="center-button">
                            <LoginButton />
                            <h1>Welcome to the Dog App</h1>
                            <p>Please log in to access the app.</p>
                        </div>
                    )}                     */}
                </main>
            </div>
            <Footer />
        </div>  
    )
}

export default App
