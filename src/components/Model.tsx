import { useGLTF } from '@react-three/drei';
import { useEffect, useState } from 'react';

useGLTF.preload('https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf');

export function Model({ url }: { url: string }) {
  const [error, setError] = useState<string | null>(null);
  const { scene, errors } = useGLTF(url, true, true, (error) => {
    setError(error.message);
    console.error('Model loading error:', error);
  });

  useEffect(() => {
    if (errors) {
      setError('Failed to load 3D model');
      console.error('Model loading errors:', errors);
    }
  }, [errors]);

  if (error) {
    throw new Error(error);
  }

  return <primitive object={scene} scale={1} />;
}