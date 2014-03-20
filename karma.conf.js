// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: require('./bower.json').appSrc || 'www',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'lib/angular/angular.js',
      'lib/angular-mocks/angular-mocks.js',
      'lib/angular-animate/angular-animate.js',
      'lib/angular-sanitize/angular-sanitize.js',
      'lib/angular-ui-router/release/angular-ui-router.js',
      'lib/ionic/release/js/ionic.js',
      'lib/ionic/release/js/ionic-angular.js',
      'js/{,*/}*.js',
      '../tests/mock/{,*/}*.js',
      '../tests/spec/{,*/}*.js'
    ],

    // list of files / patterns to exclude
    exclude: [],
    
    preprocessors: {
      'js/*.js': 'coverage',
      'js/**/*.js': 'coverage'
    },

    coverageReporter : {
      type : 'html',
      dir : '../tests/coverage/'
    },

    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-junit-reporter'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    // web server port
    port: 8080,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
