import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Planner from './components/Planner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Planner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
