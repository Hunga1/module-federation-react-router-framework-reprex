import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 5002
  },
  build: {
    target: "chrome89",
  },
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-app": "./app/root.tsx"
      },
      shared: ["react", "react-dom"]
    }),
    ],
});
