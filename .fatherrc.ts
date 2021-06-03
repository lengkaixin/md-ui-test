export default {
  esm: 'babel',
  cjs: 'babel',
  lessInBabelMode: true,
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
};
