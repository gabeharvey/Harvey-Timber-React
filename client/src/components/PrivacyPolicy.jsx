import { Box, Flex, Text, VStack, Divider, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh" bg='#45503B' p={5} textAlign="center">
      <Text fontSize="2xl" fontFamily='Chakra Petch, cursive' fontWeight='bold' color='white' mb={10}>
        Privacy Policy
      </Text>

      <Box width={{ base: "90%", md: "80%", lg: "60%" }} mb={10}>
        <VStack spacing={6} align="start" color="white" fontFamily='Chakra Petch, cursive'>
          <Text fontSize="lg" fontWeight='bold'>
            Introduction
          </Text>
          <Text fontSize="md">
            Welcome to our Privacy Policy page. Here we explain how we handle your personal data and ensure your privacy.
          </Text>

          <Divider borderColor='whiteAlpha.300' />

          <Text fontSize="lg" fontWeight='bold'>
            Information We Collect
          </Text>
          <Text fontSize="md">
            We collect various types of information for various purposes to provide and improve our Service to you.
          </Text>

          <Divider borderColor='whiteAlpha.300' />

          <Text fontSize="lg" fontWeight='bold'>
            Use of Data
          </Text>
          <Text fontSize="md">
            We use the collected data for various purposes, including providing and maintaining our Service, notifying you about changes, and analyzing data.
          </Text>

          <Divider borderColor='whiteAlpha.300' />

          <Text fontSize="lg" fontWeight='bold'>
            Security of Data
          </Text>
          <Text fontSize="md">
            We take all necessary steps to protect your data but remember that no method of transmission over the Internet or electronic storage is 100% secure.
          </Text>

          <Divider borderColor='whiteAlpha.300' />

          <Text fontSize="lg" fontWeight='bold'>
            Changes to This Privacy Policy
          </Text>
          <Text fontSize="md">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </Text>

          <Divider borderColor='whiteAlpha.300' />

          <Text fontSize="lg" fontWeight='bold'>
            Contact Us
          </Text>
          <Text fontSize="md">
            If you have any questions about this Privacy Policy, please contact us.
          </Text>
        </VStack>
      </Box>

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

export default PrivacyPolicy;
