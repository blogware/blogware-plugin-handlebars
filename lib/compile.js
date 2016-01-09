var handlebars = require('handlebars');

function compile(file, cb) {
  var template;

  var contents = file.contents.toString('utf8');

  try {
    template = handlebars.compile(contents);
  } catch(err) {
    return cb(err);
  }

  file.meta('template', template);

  cb(null, file);
}

module.exports = compile;
