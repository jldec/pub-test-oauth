/*
 * pub-test-auth pub-config
 *
*/

// use tel platform-content solutions markdown and images repos on github
var ifGithubSrc = process.env.GH_SRC;

var opts = module.exports = {

  appUrl: process.env.APP || 'https://pub-test-auth.herokuapp.com',

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
  ],

  serverPlugins: [
  ],

  browserScripts: [
  ],

  redis: {
    prefix: 'sess-pub-test-auth:',
    _log: 'log-pub-test-auth:'
  }

};
