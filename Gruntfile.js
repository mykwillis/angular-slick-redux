/* License: MIT.
 * Copyright (C) 2016, Myk Willis.
 */

'use strict';

module.exports = function (grunt) {
	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'angular-slick.js',
				'tests.js'
			]
		},
		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'angular-slick.min.js': 'angular-slick.js'
				}
			}
		},
		ngdocs: {
			options: {
				startPage: '/',
				title: false,
				html5Mode: false
			},
			api: {
				src: 'angular-slick.js',
				title: 'angular-slick API Documentation'
			}
		},
    bump: {
      options: {
        files: ['package.json', 'bower.json', 'README.md'],
        commit: false,
        push: false
      }
    }
	});

	grunt.registerTask('test', [
		'jshint',
		'karma'
	]);

	grunt.registerTask('build', [
		'jshint',
		'uglify'
	]);

	grunt.registerTask('default', ['build']);
};
