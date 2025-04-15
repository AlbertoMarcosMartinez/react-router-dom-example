import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './common/Avatar'; // Usando tu componente personalizado
import AuthContext from '../contexts/AuthContext';

const SideBar = () => {
    const { isAuthenticated, user, userImage } = useContext(AuthContext);

    const buttons = [
        { text: 'Home', path: '/' , visible: true },
        { text: 'Dogs', path: '/dogs', visible: isAuthenticated },       
        { text: 'FAQ', path: 'FAQs' , visible: isAuthenticated },
        { text: 'Page3', path: '/page3' , visible: isAuthenticated },
        { text: 'Contact', path: '/contact' , visible: isAuthenticated },
    ];

    return (
        <div className="sidebar">
            <ul>
                {buttons
                 .filter(button => button.visible)
                 .map((button, index) => (
                    <li key={index}>
                        <Link to={button.path} className="nav-button">
                            {button.text}
                        </Link>
                    </li>
                ))}
            </ul>
            {isAuthenticated && (
                <div className="rounded-profile-small">
                    <Avatar
                        imageUrl={userImage}
                        name={user?.name || 'Guest'}
                        surname={user?.surname || ''}
                        size="small"
                        showName={true}
                    />
                </div>
            )}            
        </div>
    );
};

export default SideBar;