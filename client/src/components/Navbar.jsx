import { useState, useContext, useEffect } from 'react';
import { Box, Flex, IconButton, Spacer, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Divider, Icon, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { GiPineTree } from 'react-icons/gi';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="4px"
      bg="#6C7C59"
      height="80px"
      bgImage="linear-gradient(45deg, #333 25%, transparent 25%, transparent 50%, #333 50%, #333 75%, transparent 75%, transparent)"
      bgSize="5px 5px"
    >
      <Box fontFamily="Special Elite, cursive" fontSize="30px" color="white" fontWeight='bold' p={3}>
        <Link to='/'>Harvey Timber</Link>
      </Box>
      <Spacer />
      {isMobile ? (
        <IconButton
          icon={<HamburgerIcon w={8} h={8} />}
          variant="ghost"
          aria-label="Menu"
          onClick={onOpen}
          _hover={{ cursor: 'pointer' }}
          color="white"
          _focus={{ outline: 'none', boxShadow: 'none' }}
          _active={{ background: 'transparent' }}
        />
      ) : (
        <Box display={{ base: 'none', md: 'block' }}>
          <Flex align="right">
            {isAuthenticated ? (
              <>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/timber" style={linkStyle}>Timber</Link>
                <Link to="/mineralrights" style={linkStyle}>Mineral Rights</Link>
                <Link to="/wildlife" style={linkStyle}>Wildlife</Link>
                <Link to="/map" style={linkStyle}>Map</Link>
                <Link to="/loblolly" style={linkStyle}>Loblolly Pines</Link>
                <Button onClick={handleLogout} variant="link" style={linkStyle}>Logout</Button>
              </>
            ) : (
              <>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/signup" style={linkStyle}>Sign Up</Link>
                <Link to="/login" style={linkStyle}>Log In</Link>
              </>
            )}
          </Flex>
        </Box>
      )}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          bg="#6C7C59"
          color="white"
          fontFamily="Chakra Petch, cursive"
          fontWeight='bold'
          _focus={{ outline: 'none', boxShadow: 'none' }}
          _active={{ background: 'transparent' }}
        >
          <DrawerCloseButton
            _hover={{ cursor: 'pointer' }}
            mt="8px"
            color="white"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _active={{ background: 'transparent' }}
            sx={{
              width: '40px',
              height: '40px',
              top: '4px',
              '&::before, &::after': {
                content: '""',
                position: 'absolute',
                width: '24px',
                height: '4px',
                bg: 'white',
              },
              '&::before': {
                transform: 'rotate(45deg)',
              },
              '&::after': {
                transform: 'rotate(-45deg)',
              },
            }}
          />
          <DrawerHeader borderBottom="4px solid white"><Icon as={GiPineTree} w={6} h={6} mr={2} />Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Link onClick={onClose} to="/" style={linkStyle}>Home</Link>
              {isAuthenticated ? (
                <>
                  <Link onClick={onClose} to="/timber" style={linkStyle}>Timber</Link>
                  <Link onClick={onClose} to="/mineralrights" style={linkStyle}>Mineral Rights</Link>
                  <Link onClick={onClose} to="/wildlife" style={linkStyle}>Wildlife</Link>
                  <Link onClick={onClose} to="/map" style={linkStyle}>Map</Link>
                  <Link onClick={onClose} to="/loblolly" style={linkStyle}>Loblolly Pines</Link>
                  <Divider borderColor="white" borderWidth="2px" borderStyle="solid" mb={4} mt={4}/>
                  <Button
                    onClick={handleLogout}
                    variant="solid"
                    color="white"
                    bg="transparent"
                    border="3px solid white"
                    _hover={{ bg: "whiteAlpha.300" }}
                    _active={{ bg: "whiteAlpha.500" }}
                    _focus={{ boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.6)" }}
                    p={4}
                    borderRadius="md"
                    mt={4}
                  >
                    Logout
                  </Button>

                </>
              ) : (
                <>
                  <Link onClick={onClose} to="/signup" style={linkStyle}>Sign Up</Link>
                  <Link onClick={onClose} to="/login" style={linkStyle}>Log In</Link>
                </>
              )}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
