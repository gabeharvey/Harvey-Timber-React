import { Box, Flex, Text } from '@chakra-ui/react';

const Home = () => {
  const handleCardClick = (message) => {
    alert(message);
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='lawngreen' p={5} textAlign="center">
        <Box
        as="button"
        onClick={() => handleCardClick('Welcome!')}
        bgImage={`url('/src/assets/')`}
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
        <Text fontSize="2xl" color='white' fontFamily='Amatic SC, cursive' mb={10}>Welcome to Harvey Timber</Text>
      </Flex>
      <Flex direction={['column', 'row']} spacing={10}>
        <Box
          as="button"
          onClick={() => handleCardClick('')}
          bgImage="url('src/assets/')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={5}
          rounded="md"
          m={2}
          width="300px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Amatic SC, cursive' color='white' mb={80}></Text>
        </Box>
        <Box
          as="button"
          onClick={() => handleCardClick('')}
          bgImage="url('src/assets/')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={5}
          rounded="md"
          m={2}
          width="300px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Amatic SC, cursive' color='yellow' mt={80}></Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
