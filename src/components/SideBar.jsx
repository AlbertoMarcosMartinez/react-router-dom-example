import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
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
                        <Link 
                            to={button.path}
                            className="nav-button">
                            {button.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div> 
    )
}

export default SideBar