import {
  Box,
  VStack,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  IconButton,
  Icon,
  HStack,
} from '@chakra-ui/react';
import {
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiKey,
  FiChevronRight,
  FiPrinter,
  FiBox,
  FiDollarSign,
} from 'react-icons/fi'; // Import icons for the dropdown options
import { AiFillCustomerService, AiOutlineDashboard } from 'react-icons/ai';
import {
  MdDashboard,
  MdHelpOutline,
  MdLocalOffer,
  MdOutlineProductionQuantityLimits,
  MdPeopleOutline,
} from 'react-icons/md';
import { FaWallet } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Box
      width="250px"
      bg="gray.800"
      p={4}
      position="fixed"
      top="0"
      left="0"
      height="100vh"
    >
      {/* Title */}
      <HStack align={'stretch'} color="white" spacing={2} mb={10}>
        <Icon as={AiOutlineDashboard} w={6} h={6} />
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Dashboard
        </Text>
      </HStack>

      {/* Tabs (You can map over an array to generate them dynamically) */}
      <VStack spacing={2} align="stretch">
        <Box
          borderRadius={'5px'}
          color={'white'}
          bgColor={'gray.600'}
          p={2}
          _hover={{ bg: 'gray.700' }}
        >
          <HStack justify="space-between">
            <HStack spacing={2}>
              <Icon as={MdDashboard} w={6} h={6} />
              <Text>Dashboard</Text>
            </HStack>
            <Icon as={FiChevronRight} w={6} h={6} />
          </HStack>
        </Box>

        <Box
          borderRadius={'5px'}
          color={'#f1f1f1'}
          p={2}
          _hover={{ bg: 'gray.700' }}
        >
          <HStack justify="space-between">
            <HStack spacing={2}>
              <Icon as={FiBox} w={6} h={6} />
              <Text>Product</Text>
            </HStack>
            <Icon as={FiChevronRight} w={6} h={6} />
          </HStack>
        </Box>
        <Box
          borderRadius={'5px'}
          color={'#f1f1f1'}
          p={2}
          _hover={{ bg: 'gray.700' }}
        >
          <HStack justify="space-between">
            <HStack spacing={2}>
              <Icon as={MdPeopleOutline} w={6} h={6} />
              <Text>Customers</Text>
            </HStack>
            <Icon as={FiChevronRight} w={6} h={6} />
          </HStack>
        </Box>
        <Box
          borderRadius={'5px'}
          color={'#f1f1f1'}
          p={2}
          _hover={{ bg: 'gray.700' }}
        >
          <HStack justify="space-between">
            <HStack spacing={2}>
              <Icon as={FaWallet} w={6} h={6} />
              <Text>Income</Text>
            </HStack>
            <Icon as={FiChevronRight} w={6} h={6} />
          </HStack>
        </Box>

        <Box
          borderRadius={'5px'}
          color={'#f1f1f1'}
          p={2}
          _hover={{ bg: 'gray.700' }}
        >
          <HStack justify="space-between">
            <HStack spacing={2}>
              <Icon as={MdLocalOffer} w={6} h={6} />
              <Text>Promote</Text>
            </HStack>
            <Icon as={FiChevronRight} w={6} h={6} />
          </HStack>
        </Box>
        <Box
          borderRadius={'5px'}
          color={'#f1f1f1'}
          p={2}
          _hover={{ bg: 'gray.700' }}
        >
          <HStack justify="space-between">
            <HStack spacing={2}>
              <Icon as={MdHelpOutline} w={6} h={6} />
              <Text>Help</Text>
            </HStack>
            <Icon as={FiChevronRight} w={6} h={6} />
          </HStack>
        </Box>
      </VStack>

      {/* Footer */}
      <HStack
        borderRadius={'5px'}
        bgColor={'gray.600'}
        position={'absolute'}
        align={'center'}
        bottom={'2.5rem'}
        p={4}
        gap={6}
      >
        <Avatar name="Akshat Soni" size="sm" />
        <VStack alignItems={'left'} gap={0}>
          <Text color="white" fontSize={'0.7rem'}>
            Akshat Soni
          </Text>
          <Text color="whiteAlpha.500" fontSize={'0.7rem'}>
            Project Manager
          </Text>
        </VStack>
        <Menu>
          <MenuButton
            as={IconButton}
            color={'whiteAlpha.700'}
            icon={<Icon as={FiChevronDown} />}
            variant="simple"
            size="sm"
            aria-label="User Settings"
          />
          <MenuList>
            <MenuGroup title="User Options">
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem icon={<Icon as={FiLogOut} />} color="red.500">
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Sidebar;
