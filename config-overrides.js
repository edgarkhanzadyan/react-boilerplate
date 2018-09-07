module.exports = function override(config, env) {
  const loaders = config.module.rules[1].oneOf;
  loaders.splice(loaders.length - 1, 0, {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  });
  // do stuff with the webpack config...
  return config;
};
