import { Flex, Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
// import NavBar from './nav/NavBar';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      <Navbar></Navbar>
      <Container
        borderWidth="1px"
        maxW="container.sm"
        borderRadius="md"
        height="800px"
        mt="80px"
      >
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
