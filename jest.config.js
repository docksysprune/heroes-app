export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'esbuild-jest',
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
  },
  esbuild: {
    loader: 'jsx', // Agregar esta línea para admitir sintaxis JSX
  },
};
