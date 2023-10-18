import React from 'react';
import {
  VStack,
  HStack,
  Text,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
} from '@chakra-ui/react';
import SearchBar from './SearchbarComponent';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

const ProductComponent = ({ image }) => {
  return (
    <HStack>
      {/* Product Image (You can replace 'imageSrc' with your image URL) */}
      <Box
        mr={4}
        borderRadius="5%"
        overflow={'hidden'} // Ensure the image stays within the rounded border
        width="12%"
        height="12%"
      >
        <img
          src={image}
          alt="Product Image"
          width="100%"
          height="100%"
          objectFit="contain" // To make sure the image covers the entire box
        />
      </Box>

      {/* Product Title and Description */}
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">Abstract 3D</Text>
        <Text fontSize="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis
          arcu lacinia.
        </Text>
      </VStack>
    </HStack>
  );
};

const ProductViewComponent = () => {
  return (
    <VStack align="start" spacing={4}>
      {/* First Subpart */}
      <HStack justifyContent="space-between" w="100%">
        <Text fontSize="xl" fontWeight="bold">
          Product View
        </Text>
        <HStack spacing={2}>
          {/* Search Bar (You can replace 'Placeholder' with your text) */}
          <SearchBar />
          {/* Dropdown (You can replace options with your data) */}
          <Select w="150px">
            <option value="option1">Last 30 Days</option>
            <option value="option2">Last 15 Days</option>
            <option value="option3">Last 7 Days</option>
          </Select>
        </HStack>
      </HStack>

      {/* Second Subpart - Table */}
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Stock</Th>
            <Th>Price</Th>
            <Th>Total Sales</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              {/* Product Component */}
              <ProductComponent image={image1} />
            </Td>
            <Td>100</Td>
            <Td>$10</Td>
            <Td>500</Td>
          </Tr>
          <Tr>
            <Td>
              {/* Product Component */}
              <ProductComponent image={image2} />
            </Td>
            <Td>200</Td>
            <Td>$25</Td>
            <Td>30</Td>
          </Tr>
          <Tr>
            <Td>
              {/* Product Component */}
              <ProductComponent image={image3} />
            </Td>
            <Td>50</Td>
            <Td>$28</Td>
            <Td>160</Td>
          </Tr>
          {/* Add more rows with similar structure */}
        </Tbody>
      </Table>
    </VStack>
  );
};

export default ProductViewComponent;
