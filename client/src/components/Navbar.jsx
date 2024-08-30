import { useState, useContext, useEffect } from 'react';
import { Box, Flex, IconButton, Spacer, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Link, Divider, Icon, Button } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { GiPineTree } from 'react-icons/gi';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

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
    marginRight: '6px',
    color: 'white',
    fontFamily: 'Chakra Petch, cursive',
    fontSize: '15px',
    fontWeight: 'bold',
    _hover: { textDecoration: 'underline' },
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="5px"
      bg="#6C7C59"
      height="80px"
      bgImage="linear-gradient(45deg, #333 25%, transparent 25%, transparent 50%, #333 50%, #333 75%, transparent 75%, transparent)"
      bgSize="5px 5px"
    >
      <Box fontFamily="Special Elite, cursive" fontSize="30px" color="white" fontWeight='bold' p={3}>
        <Link href='/' style={linkStyle}>Harvey Timber</Link>
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
                <Link href="/" style={linkStyle}>Home</Link>
                <Link href="/timber" style={linkStyle}>Timber</Link>
                <Link href="/mineralrights" style={linkStyle}>Mineral Rights</Link>
                <Link href="/wildlife" style={linkStyle}>Wildlife</Link>
                <Link href="/map" style={linkStyle}>Map</Link>
                <Link href="/loblolly" style={linkStyle}>Loblolly Pines</Link>
                <Button onClick={handleLogout} variant="link" style={linkStyle}>Logout</Button>
              </>
            ) : (
              <>
                <Link href="/" style={linkStyle}>Home</Link>
                <Link href="/signup" style={linkStyle}>Sign Up</Link>
                <Link href="/login" style={linkStyle}>Log In</Link>
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
          <DrawerHeader borderBottom="3px solid white"><Icon as={GiPineTree} w={6} h={6} mr={2} />Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column">
              <Link onClick={onClose} href="/" style={linkStyle}>Home</Link>
              {isAuthenticated ? (
                <>
                  <Link onClick={onClose} href="/timber" style={linkStyle}>Timber</Link>
                  <Link onClick={onClose} href="/mineralrights" style={linkStyle}>Mineral Rights</Link>
                  <Link onClick={onClose} href="/wildlife" style={linkStyle}>Wildlife</Link>
                  <Link onClick={onClose} href="/map" style={linkStyle}>Map</Link>
                  <Link onClick={onClose} href="/loblolly" style={linkStyle}>Loblolly Pines</Link>
                  <Divider borderColor="white" borderWidth="2px" mb={4} />
                  <Button onClick={handleLogout} variant="link" style={linkStyle}>Logout</Button>
                </>
              ) : (
                <>
                  <Link onClick={onClose} href="/signup" style={linkStyle}>Sign Up</Link>
                  <Link onClick={onClose} href="/login" style={linkStyle}>Log In</Link>
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
