import React from "react";
import EventSection from "./components/EventSection";

function App() {
  return (
    <div className="min-h-screen bg-purple-300 text-gray-800 font-sans">
      {/* Navbar */}
      <header className="bg-white/40 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-purple-700 tracking-wide">
            ARQ Club
          </h1>
          <nav className="hidden md:flex space-x-6">
            <button className="text-gray-700 hover:text-purple-600 font-medium transition">
              Home
            </button>
            <button className="text-gray-700 hover:text-purple-600 font-medium transition">
              Events
            </button>
            <button className="text-gray-700 hover:text-purple-600 font-medium transition">
              Team
            </button>
            <button className="text-gray-700 hover:text-purple-600 font-medium transition">
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 drop-shadow-sm">
          Event Page
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Stay tuned for exciting moments, creative showcases, and inspiring
          gatherings hosted by ARQ Club.
        </p>
      </section>

      {/* Events Section */}
      <main className="container mx-auto px-6 py-16">
        <EventSection />
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20 shadow-inner text-center py-6 mt-10">
        <p className="text-gray-700 font-medium">
          © 2025 ARQ Club | Designed with 💜 by the ARQ Team
        </p>
      </footer>
    </div>
  );
}

export default App;
