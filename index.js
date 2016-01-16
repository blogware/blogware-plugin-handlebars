var helper = require('./lib/helper');

var type = 'template engine';
var extnames = ['.hbs', '.xml'];

var compile = require('./lib/compile');
var partial = require('./lib/partial');
var rename = require('./lib/rename');
var render = require('./lib/render');

var registerPartial = partial.registerPartial;
var unregisterPartial = partial.unregisterPartial;

function create(opts) {
  registerHelpers(opts);

  return {
    type: type,
    extnames: extnames,
    compile: compile,
    registerPartial: registerPartial,
    unregisterPartial: unregisterPartial,
    rename: rename,
    render: render
  };
}

function registerHelpers(opts) {
  helper.register(opts);
}

exports.create = create;
