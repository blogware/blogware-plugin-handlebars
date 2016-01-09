var handlebars = require('handlebars');

var type = 'template engine';
var extnames = ['.hbs'];

function compile(contents, cb) {
  var template;

  try {
    template = handlebars.compile(contents);
  } catch(err) {
    return cb(err);
  }

  cb(null, template);
}

exports.type = type;
exports.extnames = extnames;
exports.compile = compile;
