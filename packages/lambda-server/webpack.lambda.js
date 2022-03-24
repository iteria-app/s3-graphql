const config = {
    mode: 'none', // "production" | "development" | "none"
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    },
    resolve: {
      extensions: [".webpack.js", ".web.js", ".mjs", ".js", ".json"]
  },
  externals: {
    express: 'express',
  },
  }
  
  module.exports = config