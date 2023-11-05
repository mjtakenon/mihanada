import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default ({mode}) => {
  
  const viteEnv = loadEnv(mode, process.cwd())
  
  if (viteEnv.VITE_SERVER_HOST === undefined) viteEnv.VITE_SERVER_HOST = "localhost";
  if (viteEnv.VITE_SERVER_PORT === undefined) viteEnv.VITE_SERVER_PORT = "52373";

  return defineConfig({
    plugins: [vue()],
    server: {
      port: viteEnv.VITE_SERVER_PORT,
      host: true,
      hmr: {
          host: viteEnv.VITE_SERVER_HOST,
      },
      watch: {
          usePolling: true,
      },
    },
    build: {
        outDir: 'public/build/', // ビルド成果物の生成先
        manifest: true
    },
  })
}