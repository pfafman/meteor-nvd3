Package.describe({
  summary: 'Nvd3.org charts with Meteor, updated version.',
  version: "0.1.0",
  git: "https://github.com/pfafman/meteor-nvd3.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('d3', 'client');

  api.add_files('lib/nv.d3.js', 'client');
  api.add_files('lib/nv.d3.css', 'client');
});