import { buildConfig } from '@optimizely/cms-sdk';

export default buildConfig({
  components: [
    './src/components/**/*.tsx',
    '!./src/components/internal/**', // Exclude internal-only components
    '!./src/components/deprecated/**', // Exclude deprecated components
    '!./src/components/Header.tsx', // Exclude specific files
  ],
});