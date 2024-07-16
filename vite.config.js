import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.timbu.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyReq', (proxyReq, req, res) => {
            const apiKey = '52b1d0d3d13346069dc5ca6e7195728a20240713160414782825';
            const appId = 'HJ33VGFDDP92BVX';
            proxyReq.path += `&API_KEY=${apiKey}&APP_ID=${appId}`;
          });
        }
      }
    }
  }
});
