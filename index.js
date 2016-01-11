var type = 'template engine';
var extnames = ['.hbs'];
var compile = require('./lib/compile');
var partial = require('./lib/partial');
var route = require('./lib/route');
var render = require('./lib/render');

exports.type = type;
exports.extnames = extnames;
exports.compile = compile;
exports.registerPartial = partial.registerPartial;
exports.route = route;
exports.render = render;
