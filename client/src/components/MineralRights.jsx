import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MineralRights = () => {
  const images = [
    { src: '/src/assets/mineral1.jpg', label: 'Mineral View 1' },
    { src: '/src/assets/mineral2.jpg', label: 'Mineral View 2' },
    { src: '/src/assets/mineral3.jpg', label: 'Mineral View 3' },
    { src: '/src/assets/mineral4.jpg', label: 'Mineral View 4' },
  ];

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Mineral Rights
      </Text>
      <Flex direction={['column', 'row']} wrap="wrap" justify="center">
        {images.map((image, index) => (
          <Box
            key={index}
            bgImage={`url(${image.src})`}
            bgSize="cover"
            bgPos="center"
            boxShadow="black 5px 5px 5px"
            p={4}
            rounded="md"
            m={4}
            width="300px"
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
    </Flex>
  );
};

export default MineralRights;
