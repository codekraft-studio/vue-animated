module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-animated/'
    : '/',
  css: {
    extract: false
  }
}
