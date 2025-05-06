import { Box, Heading, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <Box as="header" bg="blue.600" color="white" py={6} textAlign="center">
      <Heading as="h1" size="xl">
        My Developer Portfolio
      </Heading>
      <Text mt={2}>Aspiring Full-Stack Developer</Text>
    </Box>
  );
}