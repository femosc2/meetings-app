/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@variables': path.resolve(__dirname, 'src/variables/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
};
