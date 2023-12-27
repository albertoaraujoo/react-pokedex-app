/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const withTM = require("next-transpile-modules")(["@"]);

module.exports = withTM({
  webpack: (config) => {
    config.resolve.alias["@"] = `${__dirname}/src`;
    return config;
  },
});
