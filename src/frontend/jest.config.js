// jest.config.js
module.exports = {
  preset: 'ts-jest',  // Configura Jest para usar ts-jest para archivos .ts y .tsx
  testEnvironment: 'jest-environment-jsdom',  // Configura el entorno de prueba para usar jsdom (necesario para React)
  setupFilesAfterEnv: ['@testing-library/jest-dom'],  // Configura jest-dom para las aserciones en las pruebas
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transforma los archivos TypeScript con ts-jest
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@testing-library).+\\.js$',  // Asegura que los módulos necesarios sean transformados
  ],
};
