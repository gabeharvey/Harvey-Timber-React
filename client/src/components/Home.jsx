import { Box, Flex, Text } from '@chakra-ui/react';

const Home = () => {
  const handleCardClick = (message) => {
    alert(message);
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
        <Box
        as="button"
        onClick={() => handleCardClick('Welcome!')}
        bgImage={`url('/src/assets/pine-tree.jpg')`}
        bgSize="cover"
        bgPos="center"
        boxShadow="md"
        p={2}
        rounded="md"
        mb={20}
        width="300px"
        height="200px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
      </Box>
      <Flex direction='column' align='center' mb={10}>
        <Text fontSize="2xl" color='white' fontFamily='Ramabhadra, cursive' mb={10}>Welcome to Harvey Timber</Text>
      </Flex>
      <Flex direction={['column', 'row']} spacing={10}>
        <Box
          as="button"
          onClick={() => handleCardClick('')}
          bgImage="url('src/assets/pine-trees-main.png')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={4}
          rounded="md"
          m={2}
          width="400px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Ramabhadra, cursive' color='white' mb={80}>Timber</Text>
        </Box>
        <Box
          as="button"
          onClick={() => handleCardClick('')}
          bgImage="url('src/assets/oil-rig.jpg')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={4}
          rounded="md"
          m={2}
          width="400px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Ramabhadra, cursive' color='#45503B' mt={80}>Mineral Rights</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
