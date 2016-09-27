// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'main': 'app/main.js',
    'moment': 'node_modules/moment/moment.js'
};
/** User packages configuration. */
var packages = {};
// Angular specific barrels.
var ngBarrels = [
    'core',
    'common',
    'compiler',
    'platform-browser',
    'platform-browser-dynamic',
    'http',
    'router',
    'forms'
];
// Add package entries for angular packages
ngBarrels.forEach(function (ngBarrelName) {
    // Bundled (~40 requests):
    packages['@angular/' + ngBarrelName] = { main: '/bundles/' + ngBarrelName + '.umd.js', defaultExtension: 'js' };
    // Individual files (~300 requests):
    //packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
});
// Use bundle for Rxjs
packages['rxjs'] = { main: '/bundles/Rx.umd.js', defaultExtension: 'js' };
var barrels = [
    // Thirdparty barrels.
    'angular2-in-memory-web-api',
    // App specific barrels.
    'app',
    'app/shared',
    'app/navbar',
    'app/home',
    'app/home/about',
    'app/home/contact',
    'app/admin'
];
barrels.forEach(function (barrelName) {
    packages[barrelName] = { main: 'index', defaultExtension: 'js' };
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=systemjs-config.js.map