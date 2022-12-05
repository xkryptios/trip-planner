import { chakra, ChakraProvider, layout } from '@chakra-ui/react';
import theme from './lib/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
// todo : routing
// import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello world!</div>,
//   },
// ]);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
      {/* <RouterProvider router={router} /> */}
    </ChakraProvider>
  );
};

export default App;
