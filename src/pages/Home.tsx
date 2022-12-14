import { Flex, Box } from '@chakra-ui/react';
import TripPanel from '../components/TripPanel';

const trip = [
  {
    id: '123',
    name: 'trip to japan',
    startDate: '2022-12-22',
    endDate: 'trip to japan',
  },
];

export default function Home() {
  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      width="full"
      // bg="green"
    >
      <div>Home!</div>
      {/* <Box width="full"> */}
      {trip.map((trip) => {
        return <TripPanel trip={trip}></TripPanel>;
      })}
      {/* </Box> */}
    </Flex>
  );
}
