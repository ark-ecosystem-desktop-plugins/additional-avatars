module.exports = {
  register () {
    this.avatars = require('./components/avatars')
  },

  getAvatars () {
    return this.avatars
  }
}
