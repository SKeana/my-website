import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box minH="100vh" bg="gray.100">
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </Box>
  );
}