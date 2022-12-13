import { Flex } from '@chakra-ui/react';
const Navbar = () => {
  return (
    <Flex
      color="white"
      bg="brand.900"
      height="10vh"
      align="center"
      justify="flex-start"
      gap={200}
      px="10"
    >
      <div>test1</div>
      <div>test2</div>
      <div>test3</div>
    </Flex>
  );
};
export default Navbar;
