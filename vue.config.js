module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-animated/'
    : '/',
  css: {
    extract: false
  }
}
