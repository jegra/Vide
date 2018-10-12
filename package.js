Package.describe({
  documentation: 'Meteor.md',
  git: 'https://github.com/jegra/Vide.git',
  name: 'jegra:vide',
  summary: 'jQuery plugin for video backgrounds, updated for mobile autoplay',
  version: '1.1.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('jquery', 'client');
  api.addFiles('dist/jquery.vide.js', 'client');
});

Package.onTest(function(api) {
  api.use('jegra:vide', 'client');
  api.use('tinytest', 'client');
  api.addFiles('test/meteor_test.js', 'client');
});
