import { Box, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box as="footer" bg="gray.800" color="white" py={6} textAlign="center">
      <Text>© 2025 My Portfolio. All rights reserved.</Text>
    </Box>
  );
}