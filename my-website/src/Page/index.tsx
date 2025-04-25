import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Project';
import Blog from '@/components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}