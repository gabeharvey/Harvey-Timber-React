import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Map = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Aerial Mapping
      </Text>
      <Box
        bgImage="url('harvey-farm-map.jpg')"
        bgSize="cover"
        bgPos="center"
        boxShadow="md"
        p={3}
        rounded="md"
        width="80%"  
        height="100vh" 
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={20}
        mt={20}
      >
      </Box>
      <Link to='/'>
      <Button
          mt={10}
          bg='gray'
          color='white'
          fontFamily='Chakra Petch, cursive'
          fontSize='xl'
          _hover={{ bg: 'darkgray' }}
          _active={{ bg: 'darkgray', transform: 'scale(0.98)' }}
          _focus={{ boxShadow: 'outline' }}
        >
          Home
        </Button>
      </Link>
    </Flex>
  );
};

export default Map;
