import { Box, Flex } from '@chakra-ui/react';

const Map = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Box
        bgImage="url('src/assets/harvey-farm-map.jpg')"
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
    </Flex>
  );
};

export default Map;
