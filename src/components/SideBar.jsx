import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Avatar from './common/Avatar'; // Usando tu componente personalizado
import AuthContext from '../contexts/AuthContext';
import '../css/SideBar.css'; // Asegúrate de tener estilos para el sidebar

const SideBar = () => {
    const { isAuthenticated, user, userImage } = useContext(AuthContext);

    const buttons = [
        { text: 'Home', path: '/' , visible: true },
        { text: 'Dogs', path: '/dogs', visible: isAuthenticated },  
        { text: 'Adoptions', path: '/adopciones' , visible: isAuthenticated },     
        { text: 'FAQ', path: 'FAQs' , visible: isAuthenticated },        
        { text: 'Contact', path: '/contact' , visible: isAuthenticated },
        { text: 'About', path: '/about' , visible: isAuthenticated },
        
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
                <div className="rounded-profile-small" id="profile-small">
                     <Avatar
                        imageUrl={userImage}
                        name={user?.name || 'Guest'}
                        surname={user?.surname || ''}
                        size="small"              
                        alignment="right"
                        backgroundColor="#f0f0f0"
                        textColor="#333"
                        border="2px solid #ccc"
                        onClick={() => alert('Avatar clicked!')}
                        showName={false}
                    />
                </div>
            )}            
        </div>
    );
};

export default SideBar;