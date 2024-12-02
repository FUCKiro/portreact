import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { Box } from 'lucide-react';
import { Model } from './Model';
import { ModelUpload } from './ModelUpload';

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Box className="w-12 h-12 animate-spin text-indigo-600" />
      <p className="mt-4 text-gray-600">Loading 3D Model...</p>
    </div>
  );
}

export function ModelViewer() {
  const [isLoading, setIsLoading] = useState(true);
  const [modelUrl, setModelUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Using a reliable default model from Three.js examples
    setModelUrl('https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf');
    setIsLoading(false);
  }, []);

  return (
    <div className="w-full h-[600px] bg-gray-900 rounded-lg overflow-hidden relative">
      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800">
          <div className="text-red-500 text-center">
            <p className="text-xl font-bold mb-2">Error</p>
            <p>{error}</p>
            <p className="text-sm mt-2">Please ensure your model URL is accessible and in GLTF format</p>
          </div>
          <div className="mt-8 w-64">
            <ModelUpload onModelUpload={(url) => {
              setError(null);
              setModelUrl(url);
            }} />
          </div>
        </div>
      ) : isLoading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <LoadingScreen />
        </div>
      ) : !modelUrl ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <div className="w-64">
            <ModelUpload onModelUpload={setModelUrl} />
          </div>
        </div>
      ) : (
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
          <Stage environment="city" intensity={0.6}>
            {modelUrl && <Model url={modelUrl} />}
          </Stage>
          <OrbitControls autoRotate />
        </Canvas>
      )}
    </div>
  );
}