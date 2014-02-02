Package.describe({
  summary: "Twitter API Client"
});

Npm.depends({'twit': '1.1.12'});

Package.on_use(function (api) {
  if(api.export) {
    api.export('TwitMaker', 'server');
  }
  api.add_files('main.js', 'server');
});
