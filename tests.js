/* License: MIT.
 * Copyright (C) 2016, Myk Willis.
 */

/* global describe, inject, module, beforeEach, afterEach, it, expect */

'use strict';

describe('module angularSlick', function () {
	var $rootScope, $compile, $window, scope, $timeout;
  var element = null;

	beforeEach(function() {
      module('angularSlick');
  });

	beforeEach(inject(function ($injector) {
		$rootScope = $injector.get('$rootScope');
		$compile = $injector.get('$compile');
		$window = $injector.get('$window');
    $timeout = $injector.get('$timeout');
	}));

  beforeEach(function() {
    scope = $rootScope.$new();
    var el = angular.element('<slick init-on-load="true"></slick>');
    el = $compile(el)(scope);
    scope.$digest();
    element = el;
  });

	afterEach(function () {
	});

  describe('slick directive', function () {
		it('should work', function () {
      expect(element).toBeDefined();
      expect(element.hasClass('slick-initialized')).toBe(true);
    });
	});
});
