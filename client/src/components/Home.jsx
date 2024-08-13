import { Box, Flex, Text, keyframes } from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Home = () => {

  const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
  `;

  const blinkCaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: white; }
  `;

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Link to='/loblolly'>
      <Box
        bgImage={`url('/src/assets/loblolly-pine.jpg')`}
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
        <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mb={99}>Loblolly Pines</Text>
      </Box>
      </Link>
      <Box
        as="div"
        width="auto"
        overflow="hidden"
        whiteSpace="nowrap"
        borderRight="2px solid"
        display="inline-block"
        animation={`${typing} 4s steps(22) 1s 1 normal both, ${blinkCaret} 0.75s step-end infinite`}
        mb={20}
      >
        <Text
          fontSize="2xl"
          color='white'
          fontFamily='Rakkas, cursive'
          display="inline-block"
        >
          Welcome to Harvey Timber
        </Text>
      </Box>
      <Flex direction={['column', 'row']} spacing={10}>
        <Link to='/timber'>
        <Box
          bgImage="url('src/assets/loblolly-young-farm.jpg')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={4}
          rounded="md"
          m={2}
          width="300px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mt={80}>Timber</Text>
        </Box>
        </Link>
        <Link to='/mineralrights'>
        <Box
          bgImage="url('src/assets/oil-rig-old-fashioned.jpg')"
          bgSize="cover"
          bgPos="center"
          boxShadow="md"
          p={4}
          rounded="md"
          m={2}
          width="300px"
          height="400px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mt={80}>Mineral Rights</Text>
        </Box>
        </Link>
      </Flex>
      <Link to='/map'>
      <Box
        bgImage="url('src/assets/aerial-mapping.jpg')"
        bgSize="cover"
        bgPos="center"
        boxShadow="md"
        p={4}
        rounded="md"
        mt={20}
        width="600px"
        height="400px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mt={80}>Aerial Mapping</Text>
      </Box>
      </Link>
    </Flex>
  );
};

export default Home;
