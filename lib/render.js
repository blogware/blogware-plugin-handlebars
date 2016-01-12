function render(file, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = {};
  }

  opts = opts || {};

  var template = file.meta('template');

  var rendered;

  try {
    rendered = template(opts, { data: opts.data });
  } catch(err) {
    return cb(err);
  }

  cb(null, rendered);
}

module.exports = render;
