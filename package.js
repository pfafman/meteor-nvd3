Package.describe({
  name: "pfafman:nvd3",
  summary: 'Nvd3.org charts with Meteor, updated version.',
  version: "1.8.1_3",
  git: "https://github.com/pfafman/meteor-nvd3.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@1.3");

  api.add_files('lib/nv.d3.js', 'client');
  api.add_files('lib/nv.d3.css', 'client');
});
