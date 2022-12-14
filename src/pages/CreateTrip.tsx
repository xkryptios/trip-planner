import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  // FormHelperText,
} from '@chakra-ui/react';
import { useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
const CreateTrip = () => {
  const destinationRef = useRef();
  const startLocRef = useRef();
  const nameRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  return (
    <Flex direction="column" align="center" justify="center">
      <Text as="b" fontSize="2xl" pb={5}>
        Create a new trip!
      </Text>
      <FormControl id="create-trip">
        <Flex direction="column" gap={3}>
          <Box>
            <FormLabel>Destination Country</FormLabel>
            <Input type="Text" />
          </Box>
          <Box>
            <FormLabel>Starting Country</FormLabel>
            <Input type="Text" />
          </Box>
          <Box>
            <FormLabel>Name</FormLabel>
            <Input type="Text" />
          </Box>
          <Flex justify="left" gap="10">
            <Box width="50%">
              <FormLabel>Start Date</FormLabel>
              <Input type="Date" />
            </Box>
            <Box width="50%">
              <FormLabel>End Date</FormLabel>
              <Input type="Date" />
            </Box>
          </Flex>
          <Flex width="full" justifyContent="center">
            <Button
              id="create-trip"
              mt={4}
              colorScheme="teal"
              type="submit"
              onClick={() => {
                alert('submmiting');
              }}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default CreateTrip;
