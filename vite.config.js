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
        '52.201.61.44',
        '16-16-128-178.nip.io',
        'localhost'
      ]
    }
})



