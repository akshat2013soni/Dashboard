import { HStack, VStack, Text, Icon, Box } from '@chakra-ui/react';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';

const CardComponent = ({ bgcolor, color, icon, title, number, percent }) => {
  return (
    <HStack spacing={4} align="center" p={4}>
      {/* First Element (Icon) */}
      <Box p={6} borderRadius={'50px'} bgColor={bgcolor}>
        <Icon as={icon} boxSize={8} color={color} />
      </Box>

      <StatGroup>
        <Stat>
          <StatLabel>{title}</StatLabel>
          <StatNumber>${number}k</StatNumber>
          <StatHelpText>
            <StatArrow type={percent > 0 ? 'increase' : 'decrease'} />
            {percent}%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </HStack>
  );
};

export default CardComponent;
