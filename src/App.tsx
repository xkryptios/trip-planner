import { ChakraProvider } from '@chakra-ui/react';
import theme from './lib/theme';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CreateTrip from './pages/CreateTrip';
import TripDetails from './pages/TripDetails';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CreateTrip" element={<CreateTrip />} />
          <Route path="/TripDetails" element={<TripDetails />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
