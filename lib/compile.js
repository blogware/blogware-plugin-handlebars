var handlebars = require('handlebars');

function compile(contents, cb) {
  var template;

  try {
    template = handlebars.compile(contents);
  } catch(err) {
    return cb(err);
  }

  cb(null, template);
}

module.exports = compile;
