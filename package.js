Package.describe({
  summary: 'Nvd3.org charts with Meteor, updated version.',
  version: "1.7.0_4",
  git: "https://github.com/pfafman/meteor-nvd3.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.0");
  api.use('d3js:d3@3.4.13', 'client');

  api.add_files('lib/nv.d3.js', 'client');
  api.add_files('lib/nv.d3.css', 'client');
});