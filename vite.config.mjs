const path = require('path');
const react = require('@vitejs/plugin-react').default;

module.exports = {
  base: '/cxldkid_site/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
