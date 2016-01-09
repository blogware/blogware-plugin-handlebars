var type = 'template engine';
var extnames = ['.hbs'];

var compile = require('./lib/compile');
var render = require('./lib/render');

exports.type = type;
exports.extnames = extnames;
exports.compile = compile;
exports.render = render;
