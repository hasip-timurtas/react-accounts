Package.describe({
  name: 'hasip:react-accounts',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'A meteor package for meteor-reactjs applications',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/hasip-timurtas/react-accounts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.mainModule('react-accounts.js');
  api.use('accounts-google');
  api.use('accounts-password');
  api.use('twbs:bootstrap@3.3.6');
  api.use('kadira:flow-router@2.12.1');
  api.addFiles('client/register-style.css', 'client');
});
