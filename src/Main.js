import React, { useEffect } from 'react';
import { HStack, Box, Flex } from '@chakra-ui/react';
import Home from './Home.js';
import Sidebar from './Sidebar.js';

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex>
      <Box fontSize={'sm'} flex={'1'}>
        <Sidebar />
      </Box>
      <Box w={{ base: '100%', md: '250px' }} flex={'5'}>
        <Home />
      </Box>
    </Flex>
  );
};

export default Main;
