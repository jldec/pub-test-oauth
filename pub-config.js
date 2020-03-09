/*
 * pub-test-auth pub-config
 *
*/

var opts = module.exports = {

  appUrl: process.env.APP || 'https://pub-test-auth.herokuapp.com',

  pkgs: [
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
    cookie: { maxAge: 60*60*1000 },
    secret: process.env.SSC
  },

  redis: {
    prefix: 'pub-test-auth:',
    _log: 'log:'
  }

};

if (process.env.AUTH) {
  opts.pkgs.push('pub-pkg-google-oauth');
  opts.session.cookie.secure = true;
  opts["trust proxy"] = 1;
}
