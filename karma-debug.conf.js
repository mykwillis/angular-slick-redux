/* License: MIT.
 * Copyright (C) 2016, Myk Willis.
 *
 * This file omits the coverage preprocessor, which allows test cases to be
 * debugged from within WebStorm.
 */

'use strict';

module.exports = function (config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		logLevel: config.LOG_DEBUG,
		browsers: ['PhantomJS'],
		autoWatch: true,
		files: [
      'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',

      'bower_components/slick-carousel/slick/slick.js',
			'angular-slick.js',
			'tests.js'
		]
	});
};
