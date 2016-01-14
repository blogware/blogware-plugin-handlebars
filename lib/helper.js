var handlebars = require('handlebars');
var helpers = require('blogware-handlebars-helpers');
var registered = false;

function register(opts) {
  if (registered) return;

  var builtIn = helpers.create(handlebars, opts);
  handlebars.registerHelper(builtIn);

  registered = true;
}

exports.register = register;
