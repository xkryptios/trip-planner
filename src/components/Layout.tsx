import { Flex, Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from './Navbar';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Flex flexDir="column" bg="whitesmoke" height="100vh ">
      <Navbar></Navbar>
      <Box>{children}</Box>
    </Flex>
  );
};

export default Layout;
