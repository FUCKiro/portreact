import React from 'react';
import { ModelViewer } from './components/ModelViewer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">3D Model Viewer</h1>
          <p className="text-gray-400">
            Interactive 3D viewer powered by Three.js and React Three Fiber
          </p>
        </header>
        
        <ModelViewer />
        
        <div className="mt-8 text-center text-gray-400">
          <p>
            Tip: Use mouse to orbit, scroll to zoom, and right-click to pan
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
