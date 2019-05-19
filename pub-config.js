/*
 * pub-test-auth pub-config
 *
*/

var opts = module.exports = {

  appUrl: process.env.APP || 'https://pub-test-auth.herokuapp.com',

  "trust proxy": 1, // for secure sessions

  pkgs: [
    'pub-pkg-google-oauth'
  ],

  sources: [
    { name:   'pages', writable:true, path:'./md' },
    { name:   'templates', path:'./hbs'}
  ],

  staticPaths: [
    { path:'./js/test-auth.js', route:'/js', inject:true }
  ],

  generatorPlugins: [
    './plugins/generator-plugin.js'
  ],

  serverPlugins: [
    './plugins/server-plugin.js'
  ],

  browserScripts: [
  ],

  session: {
    cookie: { secure: true }
  },

  redis: {
    prefix: 'sess-pub-test-auth:',
    _log: 'log-pub-test-auth:'
  }

};
