const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: 'usage', // 设置为entry时，按照设置的targets浏览器版本全量引入
      corejs: 3,
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];
const plugins = [
  '@babel/plugin-proposal-class-properties',
  [
    '@babel/plugin-transform-runtime', // 借助helper function来实现特性，不会造成全局变量污染
    {
      corejs: 3, // 同@babel/env
    },
  ],
];

module.exports = { presets, plugins };
