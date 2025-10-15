import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 antialiased font-inter scroll-smooth">
      <style>{`
        /* Custom scrollbar for a modern look */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1f2937; }
        ::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
        html { scroll-behavior: smooth; }
      `}</style>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
