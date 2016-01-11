var handlebars = require('handlebars');

function registerPartial(file, cb) {
  var name = file.relative;

  name = name.slice('_partials/'.length);
  name = name.slice(0, -file.extname.length);

  var template = file.meta('template');

  try {
    handlebars.registerPartial(name, template);
  } catch(err) {
    return cb(err);
  }

  cb();
}

exports.registerPartial = registerPartial;
