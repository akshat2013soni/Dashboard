import React, { useState } from 'react';
import {
  VStack,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react';

const Customer = () => {
  // Sample data for the two parts of the donut chart
  const part1Value = 65; // Replace with your data for the first part

  return (
    <VStack align="center" spacing={4}>
      {/* Title */}
      <Text fontSize="xl" fontWeight="bold">
        Customer
      </Text>

      {/* Description */}
      <Text fontSize="md">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>

      {/* Donut Chart with Hover Effect */}
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        {/* First Part (Overlayed on Top) */}
        <CircularProgress
          value={part1Value}
          color={'teal.500'}
          size="100%"
          thickness="12px"
          capIsRound
          isIndeterminate={false}
        >
          <CircularProgressLabel fontSize="lg">
            {part1Value + '%'}
          </CircularProgressLabel>
        </CircularProgress>
      </div>
    </VStack>
  );
};

export default Customer;
