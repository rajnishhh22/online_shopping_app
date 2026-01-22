import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',
    css: {
      devSourcemap: false
    },
    server: {
      host: true,
      port: 5173,
      strictPort: true,
      allowedHosts: [
        '16-16-128-178.nip.io',
        'localhost',
        '52.201.61.44',
        'ec2-52-201-61-44.compute-1.amazonaws.com'
      ]
    }
})


vite.config.js
CHANGES:
- Ensure server.host is 0.0.0.0 so it binds to all interfaces in Docker.
- You can leave allowedHosts out for production static hosting because we won't
  run the dev server in the container. Keeping it here for local/dev if you need.




