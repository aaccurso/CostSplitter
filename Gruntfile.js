// Gruntfile.json

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      // grunt karma
      unit: {
        configFile: 'karma.conf.js'
      }
    }
    // Grunt Karma config example
    //karma: {
    //  options: {
    //    configFile: 'karma.conf.js',
    //    runnerPort: 9999,
    //    browsers: ['Chrome', 'Firefox']
    //  },
    //// grunt karma:continuous
    //  continuous: {
    //    singleRun: true,
    //    browsers: ['PhantomJS']
    //  },
    //// grunt karma:dev
    //  dev: {
    //    reporters: 'dots'
    //  }
    //}
  
  });
  
  grunt.loadNpmTasks('grunt-karma');

};

