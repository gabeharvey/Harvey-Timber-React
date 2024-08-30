import { useState } from 'react';
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      alert(response.data.message);
    } catch (error) {
      alert('Error logging in: ' + error.response?.data?.message || 'Unknown error');
    }
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
        <Text fontSize="2xl" color='#45503B' fontFamily='Chakra Petch, cursive' fontWeight='bold' mb={4}>Login</Text>
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
          _hover={{ bg: "blue.600" }}
          width="100%"
        >
          Log In
        </Button>
      </Box>
    </Flex>
  );
};

export default LogIn;
