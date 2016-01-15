/* License: MIT.
 * Copyright (C) 2016, Myk Willis.
 */

/* global describe, inject, module, beforeEach, afterEach, it */

'use strict';

describe('module angularSlick', function () {
	var $rootScope, $compile, $window;

	beforeEach(module('angularSlick'));

	beforeEach(inject(function ($injector) {
		$rootScope = $injector.get('$rootScope');
		$compile = $injector.get('$compile');
		$window = $injector.get('$window');
	}));

	afterEach(function () {
	});


	describe('slick directive', function () {
		it('should work', function () {
			var element = angular.element('<slick></slick>');
			element = $compile(element)($rootScope);
			$rootScope.$digest();
		});
	});
});
