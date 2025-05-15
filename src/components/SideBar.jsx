import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './common/Avatar';
import AuthContext from '../contexts/AuthContext';
import '../css/SideBar.css';

const SideBar = () => {
    const { isAuthenticated, isSideBarDisabled, user, userImage } = useContext(AuthContext);

    const buttons = [
        { text: 'Home', path: '/', visible: true },
        { text: 'Dogs', path: '/dogs', visible: isAuthenticated },
        { text: 'Adoptions', path: '/adopciones', visible: isAuthenticated },
        { text: 'FAQ', path: 'FAQs', visible: isAuthenticated },
        { text: 'Mailbox', path: '/mailbox', visible: isAuthenticated },
        { text: 'Contact', path: '/contact', visible: isAuthenticated },
        { text: 'About', path: '/about', visible: isAuthenticated },
    ];

    return (
        <div className="sidebar">
            <ul>
                {buttons
                    .filter(button => button.visible)
                    .map((button, index) => (
                        <li key={index}>
                            <Link
                                to={isSideBarDisabled ? '#' : button.path} 
                                className={`nav-button ${isSideBarDisabled ? 'disabled' : ''}`} 
                                aria-disabled={isSideBarDisabled} 
                                onClick={e => {
                                    if (isSideBarDisabled) e.preventDefault(); 
                                }}
                            >
                                {button.text}
                            </Link>
                        </li>
                    ))}
            </ul>
            {isAuthenticated && (
                <div className="rounded-profile-small" id="profile-small">
                    <Avatar
                        imageUrl={userImage}
                        name={user?.name || 'Guest'}
                        surname={user?.surname || ''}
                        size="small"
                        alignment="right"
                        backgroundColor="#f0f0f0"
                        textColor="#333"
                        onClick={() => alert('Avatar clicked!')}
                        showName={false}
                    />
                </div>
            )}
        </div>
    );
};

export default SideBar;