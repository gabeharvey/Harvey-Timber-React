import {
    Box,
    Container,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    useBreakpointValue,
    Flex
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  
  const Contact = () => {
    const isMobile = useBreakpointValue({ base: true, md: false });
  
    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        minHeight="100vh"
        bg='#45503B'
        p={5}
        textAlign="center"
      >
        <Container maxW="container.md" py={8}>
          <Box
            p={6}
            width={['90%', '80%', '70%']}
            maxW="800px"
            mx="auto"
            background='#45503B'
          >
            <Heading as="h1" size="lg" mb={4} color="white" fontFamily="Chakra Petch, cursive">
              Contact Us
            </Heading>
            <Text mb={6} fontSize="lg" color="white" fontFamily="Chakra Petch, cursive">
              We would love to hear from you! Please fill out the form below, and we will get back to you as soon as possible.
            </Text>
            <form>
              <FormControl id="name" mb={4} isRequired >
                <FormLabel color="white">Name</FormLabel>
                <Input type="text" placeholder="Your Name" color="white" fontWeight="bold"/>
              </FormControl>
              <FormControl id="email" mb={4} isRequired>
                <FormLabel color="white">Email Address</FormLabel>
                <Input type="email" placeholder="Your Email" color="white" fontWeight="bold" />
              </FormControl>
              <FormControl id="message" mb={4} isRequired>
                <FormLabel color="white">Message</FormLabel>
                <Textarea placeholder="Your Message" rows={6} color="white" fontWeight="bold" />
              </FormControl>
              <Button
                colorScheme="gray"
                type="submit"
                width={isMobile ? "full" : "auto"}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Container>
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
  
  export default Contact;
  