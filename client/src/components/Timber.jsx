import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import quotes from '../utils/quotes.json'
import {useState, useEffect} from 'react'

const Timber = () => {
    const [randomQuote, setRandomQuote] = useState ('');
    useEffect (() => {
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random () * quotes.length);
            return quotes[randomIndex];
        };
        setRandomQuote (getRandomQuote ());
    }, []);
 
  const images = [
    { src: '/src/assets/timber1.jpg', label: 'Timber View 1' },
    { src: '/src/assets/timber2.jpg', label: 'Timber View 2' },
    { src: '/src/assets/timber3.jpg', label: 'Timber View 3' },
    { src: '/src/assets/timber4.jpg', label: 'Timber View 4' },
  ];

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Timber Gallery
      </Text>
      <Flex direction={['column', 'row']} wrap="wrap" justify="center">
        {images.map((image, index) => (
          <Box
            key={index}
            bgImage={`url(${image.src})`}
            bgSize="cover"
            bgPos="center"
            boxShadow="md"
            p={4}
            rounded="md"
            m={4}
            width="300px"
            height="200px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='white'>
              {image.label}
            </Text>
          </Box>
        ))}
      </Flex>
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
      <Text fontSize='16px' fontFamily="Chakra Petch, cursive" fontWeight='bold' color='white' maxW="90%" mb="6" mt="10">
            {randomQuote.quote}
      </Text>
    </Flex>
  );
};

export default Timber;
