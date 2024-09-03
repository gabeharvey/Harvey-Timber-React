import { useState, useContext } from 'react';
import { Box, Flex, Input, Button, Text, Link } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const API_URL = import.meta.env.VITE_API_URL;

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/signup`, { username, email, password });
      console.log('Signup response:', response.data);
      localStorage.setItem('authToken', response.data.token);
      login(response.data.token);
      alert('Signup successful');
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + (error.response?.data?.message || 'Unknown error'));
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
        <Text fontSize="2xl" color='#45503B' fontFamily='Chakra Petch, cursive' fontWeight='bold' mb={5}>Sign Up</Text>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={3}
          borderColor="#45503B"
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          onClick={handleSignup}
          bg="#45503B"
          color="white"
          _hover={{ bg: "#3A3F2B" }}
          width="100%"
        >
          Sign Up
        </Button>
      </Box>
      <Text fontSize="lg" color="white" fontFamily='Chakra Petch, cursive' mt={50}>
        Already a member?{' '}
        <Link style={linkStyle} onClick={() => handleLinkClick('/login')}>
          Log In
        </Link>{' '}
        to access <Text fontFamily='Special Elite, cursive'>Harvey Timber.</Text>
      </Text>
    </Flex>
  );
};

export default SignUp;