import React, { useState } from 'react';
import { VStack, HStack, Select, Text } from '@chakra-ui/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', earnings: 1000 },
  { month: 'Feb', earnings: 1500 },
  { month: 'Mar', earnings: 1200 },
  { month: 'Apr', earnings: 2000 },
  { month: 'May', earnings: 1700 },
  { month: 'Jun', earnings: 2200 },
  { month: 'Jul', earnings: 1900 },
  { month: 'Aug', earnings: 1600 },
  { month: 'Sep', earnings: 2200 },
  { month: 'Oct', earnings: 1700 },
  { month: 'Nov', earnings: 2000 },
  { month: 'Dec', earnings: 1400 },
];

const ChartComponent = () => {
  const [selectedValue, setSelectedValue] = useState('monthly');

  const getFillColor = bar => (bar.month === 'Mar' ? 'violet' : 'lilac');

  return (
    <VStack align="start" spacing={4}>
      {/* Title and Dropdown */}
      <HStack w="100%" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">
          Overview
        </Text>
        <Select
          w="fit-content"
          value={selectedValue}
          onChange={e => setSelectedValue(e.target.value)}
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="annually">Annually</option>
        </Select>
      </HStack>

      {/* Selected Option Display */}
      <Text fontSize="md">Timely earnings for: {selectedValue}</Text>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis hide={true} />

          <Bar
            dataKey="earnings"
            stackId="a"
            radius={[10, 10, 0, 0]}
            fill={getFillColor}
          />
        </BarChart>
      </ResponsiveContainer>
    </VStack>
  );
};

export default ChartComponent;
