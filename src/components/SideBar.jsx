import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate();

    const buttons = [
        { text: 'Home', path: '/' },
        { text: 'Dogs', path: '/dogs' },
        { text: 'Page2', path: '/page2' },
        { text: 'Page3', path: '/page3' },
        { text: 'Contact', path: '/contact' }        
    ];
      
    return (
        <div className="sidebar">           
            <ul>
                {buttons.map((button, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => navigate(button.path)}
                            className="nav-button">
                            {button.text}
                        </button>
                    </li>
                ))}
            </ul>
        </div> 
    )
}

export default SideBar