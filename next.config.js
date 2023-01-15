module.exports = {
  webpack: (config) => {
    config.resolve.alias = { "path": require.resolve("path-browserify") }
    return config
  },
  reactStrictMode: false,
  images: {
    domains: ["imgs.search.brave.com"], 
  },
};
