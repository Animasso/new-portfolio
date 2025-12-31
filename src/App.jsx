import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
function App() {
  return (
    <div className=" min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
