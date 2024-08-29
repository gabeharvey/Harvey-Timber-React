import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Loblolly = () => {
  const images = [
    { src: '/src/assets/loblolly1.jpg', label: 'Loblolly Pine 1' },
    { src: '/src/assets/loblolly2.jpg', label: 'Loblolly Pine 2' },
    { src: '/src/assets/loblolly3.jpg', label: 'Loblolly Pine 3' },
    { src: '/src/assets/loblolly4.jpg', label: 'Loblolly Pine 4' },
  ];

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Loblolly Pines
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
    </Flex>
  );
};

export default Loblolly;
