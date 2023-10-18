import { Input, IconButton, Flex, chakra } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

const SearchBar = () => {
  return (
    <Flex>
      <Input placeholder="Search" size="md" variant="filled" autoFocus />
      <IconButton
        ml={2}
        icon={<SearchIcon />}
        aria-label="Search"
        colorScheme="teal"
        onClick={() => {
          // You can trigger a search action here if needed
        }}
      />
    </Flex>
  );
};

export default SearchBar;
