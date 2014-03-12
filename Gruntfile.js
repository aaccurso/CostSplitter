// Gruntfile.json

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    }
    // Grunt Karma config example
    /*
    //karma: {
    //  options: {
    //    configFile: 'karma.conf.js',
    //    runnerPort: 9999,
    //    browsers: ['Chrome', 'Firefox']
    //  },
    //  continuous: {
    //    singleRun: true,
    //    browsers: ['PhantomJS']
    //  },
    //  dev: {
    //    reporters: 'dots'
    //  }
    //}
    */
  
  });
  
  grunt.loadNpmTasks('grunt-karma');

};

