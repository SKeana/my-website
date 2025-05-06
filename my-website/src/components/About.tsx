import { Box, Heading, Text } from '@chakra-ui/react';

export default function About() {
  return (
    <Box as="section" py={12} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        About Me
      </Heading>
      <Text maxW="2xl" mx="auto" color="gray.700">
        Hi! I'm a passionate developer who recently completed a full-stack development course. 
        I specialize in building web applications with React, Node.js, and modern JavaScript. 
        Check out my projects below!
      </Text>
    </Box>
  );
}