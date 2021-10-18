module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        // useBuiltIns: 'entry',
        // corejs: 3.18,
        targets: {
          esmodules: true,
        },
      },
    ],
  ],
};