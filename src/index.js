module.exports = {
  register () {
    //
  },

  getComponentPaths () {
    return {
      'hat-man': 'components/avatars/hat-man.js',
      'beard-man': 'components/avatars/beard-man.js',
      'lady': 'components/avatars/lady.js',
      'pbb-basic': 'components/avatars/pbb-basic.js',
      'pbb-intermediate': 'components/avatars/pbb-intermediate.js',
      'pbb-advanced': 'components/avatars/pbb-advanced.js'
    }
  },

  getAvatars () {
    return [
      'hat-man',
      'beard-man',
      'lady',
      'pbb-basic',
      'pbb-intermediate',
      'pbb-advanced'
    ]
  }
}
