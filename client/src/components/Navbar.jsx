import React, { useState } from 'react';
import { Box, Flex, IconButton, Spacer, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Link, Divider, Icon } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { GiPineTree } from 'react-icons/gi';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  React.useEffect(() => {
    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

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
        <Link cursor="pointer" href='/'>Harvey Timber</Link>
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
          <Flex align="right" fontFamily="Chakra Petch, cursive" fontSize="15px" color="white" fontWeight='bold'>
            <Link cursor="pointer" mr={6} href="/">
              Home
            </Link>
            <Link cursor="pointer" mr={6} href="/signup">
              Sign Up
            </Link>
            <Link cursor="pointer" mr={6} href="/login">
              Log In
            </Link>
            <Link cursor="pointer" mr={6} href="/timber">
              Timber
            </Link>
            <Link cursor="pointer" mr={6} href="/mineralrights">
              Mineral Rights
            </Link>
            <Link cursor="pointer" mr={6} href="/wildlife">
              Wildlife
            </Link>
            <Link cursor="pointer" mr={6} href="/map">
              Map
            </Link>
            <Link cursor="pointer" mr={6} href="/loblolly">
              Loblolly Pines
            </Link>
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
            <Link onClick={onClose} cursor="pointer" mb={4} mt={4} href="/">
              Home
            </Link>

            <Divider borderColor="white" borderWidth="2px" mb={4} />

            <Link onClick={onClose} cursor="pointer" mb={4} href="/signup">
              Sign Up
            </Link>
            <Link onClick={onClose} cursor="pointer" mb={4} href="/login">
              Log In
            </Link>

            <Divider borderColor="white" borderWidth="2px" mb={4} />

            <Link onClick={onClose} cursor="pointer" mb={4} href="/timber">
              Timber
            </Link>
            <Link onClick={onClose} cursor="pointer" mb={4} href="/mineralrights">
              Mineral Rights
            </Link>
            <Link onClick={onClose} cursor="pointer" mb={4} href="/wildlife">
              Wildlife
            </Link>
            <Link onClick={onClose} cursor="pointer" mb={4} href="/map">
              Map
            </Link>
            <Link onClick={onClose} cursor="pointer" mb={4} href="/loblolly">
              Loblolly Pines
            </Link>

            <Divider borderColor="white" borderWidth="2px" mb={4} />
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </Flex>
  );
};

export default Navbar;
