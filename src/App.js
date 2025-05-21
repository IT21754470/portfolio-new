import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import HeroSection from "./components/banner/HeroSection";
import Experience from "./components/experience/experience";
function App() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0D1117' }}>
      {/* Global grid overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        opacity: 0.12,
        backgroundColor: '#1e3a8a',
        backgroundImage:
          "linear-gradient(to right, #60a5fa 0.6px, transparent 0.1px), linear-gradient(to bottom, #60a5fa 0.6px, transparent 0.6px)",
        backgroundSize: "40px 40px",
      }}></div>
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Banner />
            <HeroSection />
            <Features />
            <Experience />
            <Projects />
            <Resume />
            <Contact />
          </div>
        </main>
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
