import Header from './components/Header.jsx';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blog from './components/Blog.jsx';
import './index.css';

function App() {
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

export default App;