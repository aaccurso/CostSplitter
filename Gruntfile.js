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
      src: require('./bower.json').appSrc || 'www',
      dist: require('./bower.json').appPath || 'www',
    },

    watch: {
      js: {
        files: ['<%= ionic.src %>/js/{,*/}*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['<%= ionic.src %>/templates/{,*/}*.html','<%= ionic.src %>/index.html'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['<%= ionic.src %>/css/{,*/}*.{scss,sass}'],
        tasks: ['compass']
      },
      gruntfile: {
          files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= ionic.src %>/css/{,*/}*.css',
          '<%= ionic.src %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= ionic.src %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'tests',
            '<%= ionic.src %>'
          ]
        }
      }
    },

    compass: {
      options: {
        sassDir: '<%= ionic.src %>/css',
        cssDir: '<%= ionic.src %>/css'
        // raw: 'Sass::Script::Number.precision = 10\n'
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    bowerInstall: {
      target: {
        src: '<%= ionic.src %>/index.html'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ]
    },

    // Empties folders to start fresh
    clean: {
      server: '.tmp'
    }

  });

  grunt.registerTask('bowerInstall', ['bowerInstall']);
  
  // Serve task
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      // 'bowerInstall',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  // Test task
  grunt.registerTask('test', [
    // 'clean:server',
    // 'connect:test',
    'karma'
  ]);

};

