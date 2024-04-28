module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-flow'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@utils': ['./src/utils'],
          '@store': ['./src/store'],
          '@assets': ['./src/assets'],
          '@themes': ['./src/themes'],
          '@common': ['./src/common'],
          '@configs': ['./src/configs'],
          '@screens': ['./src/screens'],
          '@constants': ['./src/constants'],
          '@actions': ['./src/store/actions'],
          '@components': ['./src/components'],
          '@navigation': ['./src/navigation'],
          '@src': ['./src'],
        },
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
