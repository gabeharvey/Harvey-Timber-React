import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Wildlife = () => {
  const images = [
    { src: '/src/assets/wildlife1.jpg', label: 'Wildlife View 1' },
    { src: '/src/assets/wildlife2.jpg', label: 'Wildlife View 2' },
    { src: '/src/assets/wildlife3.jpg', label: 'Wildlife View 3' },
    { src: '/src/assets/wildlife4.jpg', label: 'Wildlife View 4' },
  ];

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="3xl" fontFamily='Rakkas, cursive' color='white' mb={10}>
        Wildlife Gallery
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
            <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white'>
              {image.label}
            </Text>
          </Box>
        ))}
      </Flex>
      <Link to='/'>
        <Button
          mt={9}
          bg='gray'
          color='white'
          fontFamily='Rakkas, cursive'
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

export default Wildlife;
