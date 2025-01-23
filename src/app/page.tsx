import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Service from "@/components/Service";
import Testimoials from "@/components/Testimoials";
import StatsSectio from "@/components/StatsSectio";
import Features from '@/components/Features';
import Footer from '@/components/Footer';  
import About from "@/components/About";

function App() {
  return (
    <ThemeProvider>
      <div>
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
          {/* Hero Section */}
          <Navbar />
          <Hero />
          <Service />
          <StatsSectio />
          <Features />
          
          <Journey />
          <Testimoials />
          <About />
          <Footer /> {/* Now it's properly defined */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
