import { Box, Heading, Text, Link, HStack } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box as="section" py={12} textAlign="center">
      <Heading as="h2" size="lg" mb={4}>
        Get in Touch
      </Heading>
      <Text color="gray.700" mb={4}>
        Interested in working together? Reach out to me!
      </Text>
      <HStack spacing={4} justify="center">
        <Link href="https://www.linkedin.com/in/shaun-kean-54aba71a1/" isExternal color="blue.600">
          LinkedIn
        </Link>
        <Link href="https://github.com/SKeana" isExternal color="blue.600">
          GitHub
        </Link>
        <Link href="skean2000@outlook.com" color="blue.600">
          Email
        </Link>
      </HStack>
    </Box>
  );
}