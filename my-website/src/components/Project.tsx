import { Box, Heading, SimpleGrid, Card, CardBody, CardHeader, Text, Link } from '@chakra-ui/react';

interface Project {
  title: string;
  description: string;
  github: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Recipe Website',
      description: 'A web app to browse, save, and share recipes. Built with React and TypeScript.',
      github: 'https://github.com/yourusername/recipe-website',
    },
    {
      title: 'Task Management App',
      description: 'A Trello-like app for organizing tasks with drag-and-drop. Built with React and Node.js.',
      github: 'https://github.com/yourusername/task-manager',
    },
    {
      title: 'Personal Finance Tracker',
      description: 'An app to track income, expenses, and budgets. Built with React and MongoDB.',
      github: 'https://github.com/yourusername/finance-tracker',
    },
  ];

  return (
    <Box as="section" bg="white" py={12}>
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        My Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} maxW="1200px" mx="auto" px={4}>
        {projects.map((project, index) => (
          <Card key={index} shadow="md" borderWidth="1px">
            <CardHeader>
              <Heading as="h3" size="md">
                {project.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text color="gray.600" mb={4}>
                {project.description}
              </Text>
              <Link href={project.github} isExternal color="blue.600" fontWeight="bold">
                View on GitHub
              </Link>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
}