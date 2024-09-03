import { useState, useContext } from 'react';
import { Box, Flex, Input, Button, Text, Link } from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/login`, { username, password });
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      login(token);
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
  };
  

  const linkStyle = {
    cursor: 'pointer',
    color: 'white',
    fontFamily: 'Chakra Petch, cursive',
    fontSize: '15px',
    fontWeight: 'bold',
    _hover: { textDecoration: 'underline' },
    marginBottom: '15px',
    marginTop: '15px'
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Box
        bg='white'
        boxShadow="md"
        p={8}
        rounded="md"
        width="300px"
        textAlign="left"
      >
        <Text fontSize="2xl" color='#45503B' fontFamily='Chakra Petch, cursive' fontWeight='bold' mb={5}>Log In</Text>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={3}
          borderColor="#45503B"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={6}
          borderColor="#45503B"
        />
        <Button
          onClick={handleLogin}
          bg="#45503B"
          color="white"
          _hover={{ bg: "#3A3F2B" }} 
          width="100%"
        >
          Log In
        </Button>
      </Box>
      <Text fontSize="lg" color="white" fontFamily='Chakra Petch, cursive' mt={50}>
        New to <Text fontFamily='Special Elite, cursive'>Harvey Timber?</Text>{' '}
        <Link style={linkStyle} onClick={() => handleLinkClick('/signup')}>
          Sign Up
        </Link>{' '}
        to enjoy everything our website has to offer.
      </Text>
    </Flex>
  );
};

export default LogIn;