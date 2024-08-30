import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import quotes from '../utils/quotes.json';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';

const Timber = () => {
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };
    setRandomQuote(getRandomQuote());
  }, []);

  const images = [
    { src: '/src/assets/timber-image-0.jpg', label: 'Timber View 0' },
    { src: '/src/assets/timber-image-1.jpg', label: 'Timber View 1' },
    { src: '/src/assets/timber-image-2.jpg', label: 'Timber View 2' },
    { src: '/src/assets/timber-image-3.jpg', label: 'Timber View 3' },
    { src: '/src/assets/timber-image-4.jpg', label: 'Timber View 4' },
    { src: '/src/assets/timber-image-5.jpg', label: 'Timber View 5' },
    { src: '/src/assets/timber-image-6.jpg', label: 'Timber View 6' },
    { src: '/src/assets/timber-image-7.jpg', label: 'Timber View 7' },
    { src: '/src/assets/timber-image-8.jpg', label: 'Timber View 8' },
    { src: '/src/assets/timber-image-9.jpg', label: 'Timber View 9' }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Timber Gallery
      </Text>
      <Box width="40%" mb={10}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Box
              key={index}
              bgImage={`url(${image.src})`}
              bgSize="cover"
              bgPos="center"
              
              p={4}
              rounded="lg"
              height="400px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='transparent'>
                {image.label}
              </Text>
            </Box>
          ))}
        </Slider>
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
      <Text fontSize='16px' fontFamily="Chakra Petch, cursive" fontWeight='bold' color='white' maxW="90%" mb="6" mt="10">
        {randomQuote.quote}
      </Text>
    </Flex>
  );
};

export default Timber;
