import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';

import { RiMenuLine, RiSearchLine } from 'react-icons/ri';
import { NotificationsNav } from './NotificationsNav';
import { Logo } from './Logo';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen } = useSidebarDrawer();
  const mobileDisclosure = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          display="flex"
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} mr="4" />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          boxShadow="none"
          mr="2"
        />
      )}
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto" gap="4">
        {isWideVersion && <NotificationsNav />}
        {!isWideVersion && (
          <Box borderRightWidth={2} borderColor="gray.700" h="9">
            <IconButton
              aria-label="Search"
              variant="unstyled"
              h="10"
              icon={<Icon as={RiSearchLine} fontSize="24" />}
              _focus={{}}
              onClick={mobileDisclosure.onOpen}
            />
          </Box>
        )}
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
