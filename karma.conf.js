/* License: MIT.
 * Copyright (C) 015, Myk Willis.
 */

'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		browsers: ['PhantomJS'],
		autoWatch: true,
		reporters: ['dots', 'coverage'],
		files: [
      'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'bower_components/slick-carousel/slick/slick.js',
			'angular-slick.js',
			'tests.js'
		],
		preprocessors: {
			'angular-slick.js': 'coverage'
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		}
	});
};
