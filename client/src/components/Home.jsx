import { Box, Flex, Text, Grid, keyframes } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {

  const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
  `;

  const blinkCaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: white; }
  `;

  const gridBoxSize = {
    width: '300px',
    height: '400px'
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Box
        as="div"
        width="auto"
        overflow="hidden"
        whiteSpace="nowrap"
        borderRight="2px solid"
        display="inline-block"
        animation={`${typing} 4s steps(22) 1s 1 normal both, ${blinkCaret} 0.75s step-end infinite`}
        mb={10}
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
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} 
        gap={6} 
        mt={10}
        width="100%"
        maxWidth="800px"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        p={4}
      >
        <Link to='/timber'>
          <Box
            bgImage="url('src/assets/loblolly-young-farm.jpg')"
            bgSize="cover"
            bgPos="center"
            boxShadow="md"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mb={4}>Timber</Text>
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
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mb={4}>Mineral Rights</Text>
          </Box>
        </Link>
        <Link to='/wildlife'>
          <Box
            bgImage="url('src/assets/whitetail.jpg')"
            bgSize="cover"
            bgPos="center"
            boxShadow="md"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mb={4}>Wildlife</Text>
          </Box>
        </Link>
        <Link to='/map'>
          <Box
            bgImage="url('src/assets/aerial-mapping.jpg')"
            bgSize="cover"
            bgPos="center"
            boxShadow="md"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mb={4}>Aerial Mapping</Text>
          </Box>
        </Link>
      </Grid>
      <Link to='/loblolly'>
      <Box
          bgGradient="radial(circle, #a8d5ba, #6a8b74, #4a5d23, #2c3a2b)"
          boxShadow="lg"
          p={4}
          width="400px"
          height="400px"
          clipPath="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
      >
      <Text fontSize="xl" fontFamily='Rakkas, cursive' color='white' mt={4}>About Loblolly Pines</Text>
      </Box>
      </Link>
    </Flex>
  );
};

export default Home;
