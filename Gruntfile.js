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
      app: require('./bower.json').appPath || 'www',
      src: require('./bower.json').appSrc || 'www',
      bower: 'www/lib'
    },

    watch: {
      js: {
        files: ['<%= ionic.src %>/js/{,*/}*.js'],
        options: {
          livereload: true
        }
      },
      html: {
        files: ['<%= ionic.src %>/templates/{,*/}*.html',],
        options: {
          livereload: true
        }
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
      },
      compass: {
        files: ['<%= ionic.src %>/css/{,*/}*.{scss,sass}'],
        tasks: ['compass']
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
        specify: 'main.scss',
        cssDir: '<%= ionic.src %>/css'
        // raw: 'Sass::Script::Number.precision = 10\n'
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ]
    },

    // Empties folders to start fresh
    clean: {
      server: '.tmp'
    }

  });
  
  // Serve task
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'connect:livereload',
      'watch'
    ]);
  });

  // Test task
  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'connect:test',
    'karma'
  ]);

};

