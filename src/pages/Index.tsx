
import React from 'react';
import { Info } from 'lucide-react';
import IndiaMap from '../components/IndiaMap';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            India Light Pollution Explorer
          </h1>
          <p className="text-gray-400 mt-2">
            Explore light pollution levels across different states of India
          </p>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        {/* Map Component */}
        <IndiaMap />
        
        {/* Information Section */}
        <section className="mt-12 bg-gray-900 rounded-lg p-6 border border-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-900/20 rounded-lg">
              <Info className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-3">About Light Pollution</h2>
              <p className="text-gray-300 mb-4">
                Light pollution is excessive, misdirected, or obtrusive artificial light produced by human activities. 
                This light pollution affects the natural environment, wildlife behavior, astronomical observation, 
                and human health.
              </p>
              <p className="text-gray-300">
                The data visualized here shows the varying levels of light pollution across India's states, from areas with 
                pristine night skies to those with severe light pollution where the Milky Way is no longer visible.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="mt-12 border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Light pollution data is based on satellite imagery and ground measurements.</p>
          <p className="mt-2">© 2023 India Light Pollution Explorer</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
