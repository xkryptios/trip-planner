import { Flex, Button } from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Flex
      color="white"
      bg="brand.700"
      height="10vh"
      align="center"
      justify="space-between"
      gap={200}
      px="10"
    >
      <div>Triplanner</div>
      <Flex align="center" gap={100} mr={30}>
        <Button bg="green.500" _hover={{ bg: 'green.700' }}>
          Create New
        </Button>
        <Button bg="green.500" _hover={{ bg: 'green.700' }}>
          All Trips
        </Button>
        <div>Kryptios</div>
      </Flex>
    </Flex>
  );
};
export default Navbar;
