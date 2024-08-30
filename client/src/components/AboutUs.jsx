import {
    Box,
    Container,
    Heading,
    Text,
    Image,
    Stack,
    useBreakpointValue,
    Button,
    Flex
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  const AboutUs = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        bg="#45503B"
        p={5}
        textAlign="center"
      >
        <Container maxW="container.md" py={8}>
          <Box
            p={6}
            width={['90%', '80%', '70%']}
            maxW="800px"
            mx="auto"
            bg="#45503B"
          >
            <Heading as="h1" size="lg" mb={4} color="white" fontFamily="Chakra Petch, cursive">
              About Us
            </Heading>
            <Text mb={6} fontSize="lg" color="white" fontFamily="Chakra Petch, cursive">
              Welcome to Harvey Timber! We are dedicated to providing the best services and solutions for our clients. Our team is composed of experienced professionals who are passionate about what they do.
            </Text>
            <Stack spacing={6} mb={6}>
              <Box>
                <Heading as="h2" size="md" mb={2} color="white">
                  Our Mission
                </Heading>
                <Text fontSize="md" color="white">
                  Our mission is to deliver high-quality timber products and services that meet the needs and expectations of our clients. We strive for excellence in every project and value integrity, innovation, and collaboration.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="md" mb={2} color="white">
                  Our Team
                </Heading>
                <Text fontSize="md" color="white">
                  Our team consists of talented and dedicated individuals who work together to achieve common goals. Each team member brings a unique set of skills and expertise, contributing to our collective success.
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="md" mb={2} color="white">
                  Contact Us
                </Heading>
                <Text fontSize="md" color="white">
                  If you have any questions or would like to learn more about our company, please feel free to reach out. We would be happy to provide more information and discuss how we can assist you.
                </Text>
              </Box>
            </Stack>
            <Image
              src="../src/assets/head-guy.jpg"
              alt="About Us Image"
              borderRadius="md"
              boxSize={isMobile ? "100%" : "auto"}
              objectFit="cover"
              mb={6}
            />
          </Box>
          <Link to='/'>
            <Button
              mt={10}
              bg='gray.500'
              color='white'
              fontFamily='Chakra Petch, cursive'
              fontSize='xl'
              _hover={{ bg: 'gray.600' }}
              _active={{ bg: 'gray.600', transform: 'scale(0.98)' }}
              _focus={{ boxShadow: 'outline' }}
            >
              Home
            </Button>
          </Link>
        </Container>
      </Flex>
    );
  };
  
  export default AboutUs;
  