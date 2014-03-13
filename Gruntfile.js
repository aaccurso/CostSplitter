// Gruntfile.json

module.exports = function(grunt) {
  
  // Reads package.json and loads grunt tasks.
  require('load-grunt-tasks')(grunt);
  
  // Times how long tasks take.
  require('time-grunt')(grunt);
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ionic: {
      app: 'www'
    },
    watch: {
      gruntfile: {
          files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= ionic.app %>/templates/{,*/}*.html',
          '<%= ionic.app %>/css/{,*/}*.css',
          '<%= ionic.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      compass: {
        files: ['<%= ionic.app %>/css/{,*/}*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer']
      },
      karma: {
        // grunt karma
        unit: {
          configFile: 'karma.conf.js'
        }
      }
    },
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

};

