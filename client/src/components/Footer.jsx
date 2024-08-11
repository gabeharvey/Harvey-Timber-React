import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      padding="20px"
      bg="#6C7C59"
      height="100px"
      bgImage="linear-gradient(45deg, #333 25%, transparent 25%, transparent 50%, #333 50%, #333 75%, transparent 75%, transparent)"
      bgSize="5px 5px"
      fontFamily="Rakkas, cursive"
      color="white"
    >
      <Flex direction="column" align="center">
        <Box>
          <Link href="/about" mr={4} _hover={{ textDecoration: 'underline' }}>
            About Us
          </Link>
          <Link href="/contact" mr={4} _hover={{ textDecoration: 'underline' }}>
            Contact
          </Link>
          <Link href="/privacy" _hover={{ textDecoration: 'underline' }}>
            Privacy Policy
          </Link>
        </Box>
        <Text mt={3}>© 2024 Harvey Timber. All rights reserved.</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
