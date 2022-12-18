import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Stack,
  useColorModeValue,
  Box,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [display, changeDisplay] = useState('none');
  // Here's the signature
  const value = useColorModeValue('white', 'gray.800');
  return (
    <Box
      position="fixed"
      w="full"
      zIndex="20"
      boxShadow="base"
      top="0"
      as="nav"
      bg={value}
      // css={{ backdropFilter: 'blur(10px)' }}
    >
      <Container
        display="flex"
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* <Stack align="center" direction="row" w="full" justify="space-around"> */}
        <Logo></Logo>
        <Flex align="center">
          <Box>
            <Link to="/CreateTrip">
              <Button
                as="a"
                variant="ghost"
                aria-label="CreateTrip"
                my={5}
                w="100%"
              >
                CreateTrip
              </Button>
            </Link>
          </Box>
          <Box>
            <Link to="/TripDetails">
              <Button
                as="a"
                variant="ghost"
                aria-label="TripDetails"
                my={5}
                w="100%"
              >
                TripDetails
              </Button>
            </Link>
          </Box>

          <Switch isChecked={isDark} onChange={toggleColorMode} />
        </Flex>
        {/* </Stack> */}
      </Container>
    </Box>
  );
};

export default DarkModeSwitch;
