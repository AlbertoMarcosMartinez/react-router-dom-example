import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import AuthContext from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import '../css/Login.css'; 

const Login = () => {
  const { login } = useContext(AuthContext);
  const { isDarkMode } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      login({
        name: 'Alberto',
        surname: 'Marcos Martinez',
        imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      });
      console.log('User logged in:', username);
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={`login-container ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input className='input'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input className='input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;