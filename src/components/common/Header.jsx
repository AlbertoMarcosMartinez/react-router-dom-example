import React from 'react'
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <div>
        <header className="header">
            <h1>REACT ROUTER DOM EXAMPLES</h1>           
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dogs">Dogs</a></li>
                </ul>
            </nav>
            <Avatar alt="Alberto Marcos" src="/static/images/avatar/1.jpg" />            
        </header>
    </div>
  )
}

export default Header