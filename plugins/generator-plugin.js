module.exports = function(generator) {

  var hb = generator.handlebars;
  var u = generator.util;

  hb.registerHelper('show-session', function(frame) {
    return  u.htmlify(generator.req && generator.req.session);
  });

};
