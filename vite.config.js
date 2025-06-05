import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom middleware to set correct MIME type for GLB files
const gltfMiddleware = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.endsWith('.glb')) res.setHeader('Content-Type', 'model/gltf-binary');
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), gltfMiddleware()],
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: 'dist',
  }
})