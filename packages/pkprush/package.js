Package.describe({summary: "Telescope Kepler theme"});

Package.on_use(function (api) {

  api.use(['fourseven:scss','templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    'lib/client/templates/new_posts_list.html',
    'lib/client/kepler.js',
    ], ['client']);

});
