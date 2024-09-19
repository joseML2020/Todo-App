import { useState } from 'react';
import { Container, Typography} from '@mui/material';
import LoginPage from './page/Login/LoginPage';
import { TodoPage } from './page/ListPage/TodoPage';
import UserProfileCard from './component/profile/UserProfileCard'; 

import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const handleLoginSuccess = (token, emailValue) => {
    setEmail(emailValue);
    setToken(token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setToken('');
    setIsAuthenticated(false);
  };

  return (
    <Container className='p-6 my-20 border-2 shadow-xl place-content-center'>
      {isAuthenticated ? (
        <>
          <Typography variant="h3" align="center" gutterBottom className='mt-2'>
            TODO List
          </Typography>
          <UserProfileCard email={email} onLogout={handleLogout} />
          <TodoPage />
        </>
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </Container>
  );
};

export default App;
