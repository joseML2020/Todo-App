import { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';

const LoginPage = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_LOGIN_API_URL}`, {
        email,
        password,
      });
      if (response.data.token) {
        onLoginSuccess(response.data.token, email);
        setError(false);
      }
    } catch (err) {
      console.log('Error: ' + err.message);
      setError(true);
    }
  };

  return (
    <Box className="flex flex-col items-center justify-center p-4">
      <Typography variant="h4" className="mb-4">Login</Typography>
      <Box
        component="form"
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={error}
          helperText={error && "Invalid credentials"}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={error}
          helperText={error && "Invalid credentials"}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
