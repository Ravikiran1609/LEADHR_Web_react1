import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Lead HR</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <main className="bg-white text-gray-900">
      <header className="bg-gray-300 h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Your HR Growth Partner</h1>
          <p className="mt-4 text-lg md:text-xl">Empowering your workforce with tailored HR solutions.</p>
        </div>
      </header>
    </main>
  );
}

function AboutPage() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700 mb-4">Lead HR Consulting provides strategic workforce services.</p>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form className="space-y-6">
        <input type="text" placeholder="Full Name" className="w-full border rounded px-4 py-2" required />
        <input type="email" placeholder="Email" className="w-full border rounded px-4 py-2" required />
        <textarea placeholder="Message" rows="4" className="w-full border rounded px-4 py-2" required></textarea>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center text-sm mt-16">
      <p>&copy; {new Date().getFullYear()} Lead HR Consulting. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
