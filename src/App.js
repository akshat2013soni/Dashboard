import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';

import Main from './Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" fontFamily={'sans-serif'}>
        {/* <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          
        </Grid> */}

        <Main />
      </Box>
    </ChakraProvider>
  );
}

export default App;
