import { VStack, HStack, Box } from '@chakra-ui/react';
import SearchBar from './SearchbarComponent.js';
import CardComponent from './CardComponent.js';
import ChartComponent from './ChartComponent.js';
import CustomerComponent from './CustomerComponent.js';
import ProductViewComponent from './ProductViewComponent.js';
import {
  FaWallet,
  FaDollarSign,
  FaMoneyCheck,
  FaShoppingCart,
} from 'react-icons/fa';

const Home = () => {
  return (
    <VStack pl="14" pr="10" pt="1" pb="4" align="stretch" bgColor={'#f1f1f1'}>
      {/* First HStack */}
      <HStack pt={'2'} justifyContent={'space-between'}>
        <Box>Hello Shahrukh,</Box>
        <Box>
          <SearchBar />
        </Box>
      </HStack>

      {/* Second HStack */}
      <HStack flexWrap={'wrap'} pt="4" gap={'6'}>
        <Box bg="white" flex="1">
          <CardComponent
            icon={FaDollarSign}
            title="Earning"
            number="198"
            percent="37.8"
            color={'#6cf542'}
            bgcolor={'#d9f7d0'}
          />
        </Box>
        <Box bg="white" flex="1">
          <CardComponent
            icon={FaMoneyCheck}
            title="Orders"
            number="2.4"
            percent="-2"
            color={'#bd43fa'}
            bgcolor={'#eabfff'}
          />
        </Box>
        <Box bg="white" flex="1">
          <CardComponent
            icon={FaWallet}
            title="Balance"
            number="2.4"
            percent="-2"
            color={'#4faaff'}
            bgcolor={'#c9e5ff'}
          />
        </Box>
        <Box bg="white" flex="1">
          <CardComponent
            icon={FaShoppingCart}
            title="Total Sales"
            number="89"
            percent="11"
            color={'#ff3366'}
            bgcolor={'#ffc4d3'}
          />
        </Box>
      </HStack>

      {/* Third HStack */}
      <HStack pt="4" gap={'6'} align={'stretch'}>
        <Box p={4} bg="white" flex="3" borderRadius={'5px'}>
          <ChartComponent />
        </Box>
        <Box p={4} bg="white" flex="1" borderRadius={'5px'}>
          <CustomerComponent />
        </Box>
      </HStack>

      {/* Fourth HStack */}
      <HStack pt="4">
        <Box p={4} bg="white" flex="1" borderRadius={'5px'}>
          <ProductViewComponent />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Home;
