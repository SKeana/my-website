import { Box, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box as="section" py={12} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        My thoughts
      </Heading>
      <Text maxW="2xl" mx="auto" color="gray.700">
        Hi! this is my Blog and it is my place to talk about my thought on different thing that take my interest,
        this can be from box that I'm reading to changes that are happing in the tech spaces.
      </Text>
    </Box>
  );
}