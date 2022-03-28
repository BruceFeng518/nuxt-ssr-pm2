const middleware = {}

middleware['device'] = require('..\\middleware\\device.js')
middleware['device'] = middleware['device'].default || middleware['device']

middleware['i18n'] = require('..\\middleware\\i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

export default middleware
