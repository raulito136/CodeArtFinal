import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',  // Asegúrate de que el servidor Next.js esté corriendo en este puerto
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});