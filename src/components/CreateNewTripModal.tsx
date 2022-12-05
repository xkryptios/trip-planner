import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const CreateNewTripModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Create New Trip</Button>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create New Trip</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              id="new-trip"
              onSubmit={(e) => {
                e.preventDefault();
                alert('submitted');
              }}
            >
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type="text"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Starting Location</FormLabel>
                <Input type="text"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Destination</FormLabel>
                <Input type="text"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input type="date"></Input>
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input type="date"></Input>
              </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" form="new-trip" type="submit">
              Create Trip
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateNewTripModal;
