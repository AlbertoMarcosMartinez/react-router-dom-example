import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import AuthContext from '../contexts/AuthContext';

const SideBar = () => {
    const { isAuthenticated, user, userImage } = useContext(AuthContext);

    const buttons = [
        { text: 'Home', path: '/' },
        { text: 'Dogs', path: '/dogs' },
        { text: 'Page2', path: '/page2' },
        { text: 'Page3', path: '/page3' },
        { text: 'Contact', path: '/contact' },
    ];

    return (
        <div className="sidebar">
            <ul>
                {buttons.map((button, index) => (
                    <li key={index}>
                        <Link to={button.path} className="nav-button">
                            {button.text}
                        </Link>
                    </li>
                ))}
            </ul>
            {isAuthenticated && (
                <div className="user-info">
                    <Avatar alt={user?.name || 'User'} src={userImage} sx={{ width: 40, height: 40 }} />
                    <h2>{user?.surname}, {user?.name}</h2>
                </div>
            )}
        </div>
    );
};

export default SideBar;