Package.describe({
  summary: 'Epoch charts with Meteor',
  version: "0.1.0",
  git: "https://github.com/pfafman/meteor-epoch.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('d3', 'client');

  api.add_files('lib/epoch.js', 'client');
  api.add_files('lib/epoch.css', 'client');
});