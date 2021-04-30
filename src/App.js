import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import "@fontsource/poppins/500.css"
import ThemeToggler from './ThemeToggler';
import HomePage from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      
      <Box textAlign="center" fontFamily="poppins" fontSize={["sm", "md", "lg", "xl"]}>
        <Grid minH="100vh"
          p={1}
          gap={1}
          autoFlow="row dense"
          templateColumns={{
          base: '1fr',
          md: 'repeat(1, 1fr)',
          lg: 'repeat(1, 1fr)',
        }}>
          <ThemeToggler />
          <HomePage />
        </Grid>

        <Box
          minH="100vh"
          maxW="1500px"
          marginX="auto"
          py={4}
          px={2}
          position="relative"
          textAlign="center"
        >
          <Nav />
          
        </Box>
       
      </Box>
       <Footer />
    </ChakraProvider>
  );
}

export default App;
