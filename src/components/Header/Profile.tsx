import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Samuel Cabral</Text>
        <Text color="gray.300" fontSize="small">
          samuelcabral.mail@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Samuel Cabral"
        src="https://github.com/samuel-cabral.png"
      />
    </Flex>
  );
}
