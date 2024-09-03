import { useContext } from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const linkStyle = {
  cursor: 'pointer',
  marginRight: '16px',
  color: 'white',
  fontFamily: 'Chakra Petch, cursive',
  fontSize: '15px',
  fontWeight: 'bold',
  _hover: { textDecoration: 'underline' },
  marginBottom: '15px',
  marginTop: '15px'
};

const Footer = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

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
      fontFamily="Chakra Petch, cursive"
      fontWeight='bold'
      color="white"
    >
      <Flex direction="column" align="center">
        <Box>
          <Link onClick={() => handleLinkClick('/about')} style={linkStyle}>
            About Us
          </Link>
          <Link onClick={() => handleLinkClick('/contact')} style={linkStyle}>
            Contact
          </Link>
          <Link onClick={() => handleLinkClick('/privacypolicy')} style={linkStyle}>
            Privacy Policy
          </Link>
        </Box>
        <Text mt={3}>© 2024 Harvey Timber. All rights reserved.</Text>
      </Flex>
    </Flex>
  );
};

export default Footer;