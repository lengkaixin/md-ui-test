import { defineConfig } from 'dumi';

import menus from './config/menus.js';

export default defineConfig({
  title: 'lerna_demo',
  favicon: '/images/MDLogoIcon.png',
  logo: '/images/MDLogoIcon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  // more antd theme : // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
  theme: { '@primary-color': '#E60023', '@rrrred': 'blue' },
});
