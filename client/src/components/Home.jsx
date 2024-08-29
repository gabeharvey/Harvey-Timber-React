import { Box, Flex, Text, Grid, keyframes } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import quotes from '../utils/quotes.json'
import {useState, useEffect} from 'react'

const Home = () => {
  const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
  `;

  const blinkCaret = keyframes`
    from, to { border-color: transparent; }
    50% { border-color: transparent; }
  `;

  const gridBoxSize = {
    width: '300px',
    height: '400px'
  };

  const [randomQuote, setRandomQuote] = useState ('');
    useEffect (() => {
        const getRandomQuote = () => {
            const randomIndex = Math.floor(Math.random () * quotes.length);
            return quotes[randomIndex];
        };
        setRandomQuote (getRandomQuote ());
    }, []);

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Box
        as="div"
        width="auto"
        overflow="hidden"
        whiteSpace="nowrap"
        borderRight="2px solid transparent" 
        display="inline-block"
        animation={`${typing} 4s steps(22) 1s 1 normal both, ${blinkCaret} 0.75s step-end infinite`}
        mb={1}
      >
        <Text
          fontSize="2xl"
          color='white'
          fontFamily='Chakra Petch, cursive'
          display="inline-block"
          fontWeight='bold'
        >
          Welcome to Harvey Timber
        </Text>
      </Box>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} 
        gap={6} 
        mt={1}
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
            boxShadow="black 5px 5px 5px"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            fontWeight='bold'
          >
            <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='white' mb={4}>Timber</Text>
          </Box>
        </Link>
        <Link to='/mineralrights'>
          <Box
            bgImage="url('src/assets/oil-rig-old-fashioned.jpg')"
            bgSize="cover"
            bgPos="center"
            boxShadow="black 5px 5px 5px"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            fontWeight='bold'
          >
            <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='white' mb={4}>Mineral Rights</Text>
          </Box>
        </Link>
        <Link to='/wildlife'>
          <Box
            bgImage="url('src/assets/whitetail.jpg')"
            bgSize="cover"
            bgPos="center"
            boxShadow="black 5px 5px 5px"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            fontWeight='bold'
          >
            <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='white' mb={4}>Wildlife</Text>
          </Box>
        </Link>
        <Link to='/map'>
          <Box
            bgImage="url('src/assets/aerial-mapping.jpg')"
            bgSize="cover"
            bgPos="center"
            boxShadow="black 5px 5px 5px"
            p={4}
            rounded="md"
            m={2}
            {...gridBoxSize}
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
            fontWeight='bold'
          >
            <Text fontSize="xl" fontFamily='Chakra Petch, cursive' color='white' mb={4}>Aerial Mapping</Text>
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
          mt={1}
        >
          <Box
            as="div"
            width="auto"
            overflow="hidden"
            whiteSpace="nowrap"
            borderRight="2px solid transparent"
            display="inline-block"
            animation={`${typing} 4s steps(40) 1s 1 normal both, ${blinkCaret} 0.75s step-end infinite`}
          >
            <Text
              fontSize="xl"
              fontFamily='Chakra Petch, cursive'
              fontWeight='bold'
              color='white'
              display="inline-block"
              mb='20px'
            >
              About Loblolly Pines
            </Text>
          </Box>
        </Box>
      </Link>
      <Text fontSize='16px' fontFamily="Chakra Petch, cursive" fontWeight='bold' color='white' maxW="100%" mb="6">
            {randomQuote.quote}
      </Text>
    </Flex>
  );
};

export default Home;
