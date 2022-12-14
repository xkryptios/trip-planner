import { useState } from 'react';
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Stack,
  useColorModeValue,
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
    <Flex
      position="fixed"
      w="full"
      zIndex="200"
      boxShadow="base"
      bg={value}
      top="0"
    >
      <Stack align="center" direction="row" w="full" justify="space-around">
        <Logo></Logo>
        <Link to="/">
          <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
            Home
          </Button>
        </Link>

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
        <Switch isChecked={isDark} onChange={toggleColorMode} />
      </Stack>
    </Flex>
  );
};

export default DarkModeSwitch;
