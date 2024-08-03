import { useState } from 'react';
import { Box, Flex, Input, Button, Text } from '@chakra-ui/react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/api/login', { username, password });
      alert('Login successful');
    } catch (error) {
      alert('Error logging in');
    }
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='lawngreen' p={5} textAlign="center">
      <Box
        bg='white'
        boxShadow="md"
        p={8}
        rounded="md"
        width="300px"
        textAlign="left"
      >
        <Text fontSize="2xl" color='lawngreen' fontFamily='Amatic SC, cursive' mb={4}>Login</Text>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          mb={3}
          borderColor="lawngreen"
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={6}
          borderColor="lawngreen"
        />
        <Button
          onClick={handleLogin}
          bg="lawngreen"
          color="white"
          _hover={{ bg: "blue.600" }}
          width="100%"
        >
          Login
        </Button>
      </Box>
    </Flex>
  );
};

export default Login;
