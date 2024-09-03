import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh"
      bg='#45503B'
      p={5}
      textAlign="center"
    >
      <Box
        bgGradient="radial(circle, #a8d5ba, #6a8b74, #4a5d23, #2c3a2b)"
        boxShadow="lg"
        p={4}
        width="400px"
        height="400px"
        clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mb={4}
      >
        <Text
          fontSize="4xl"
          fontFamily="Chakra Petch, cursive"
          fontWeight="bold"
          color="white"
        >
          404
        </Text>
        <Text
          fontSize="xl"
          fontFamily="Chakra Petch, cursive"
          fontWeight="bold"
          color="white"
          mt={2}
        >
          Oops! The page you are looking for does not exist.
        </Text>
      </Box>
      <Link to="/">
        <Button
          colorScheme="teal"
          size="lg"
          mt={4}
          fontFamily="Chakra Petch, cursive"
          fontWeight="bold"
        >
          Go to Home
        </Button>
      </Link>
    </Flex>
  );
};

export default NotFound;
