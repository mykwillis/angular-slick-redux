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

  function compileTemplate(template, scope) {
    if (!scope) {
      scope = $rootScope.$new();
    }
    var el = $compile(angular.element(template))(scope);
    scope.$digest();
    return el;
  }
  beforeEach(function() {
    scope = $rootScope.$new();
  });

	afterEach(function () {
	});

  describe('slick directive', function () {
    it('should work', function () {
      element = compileTemplate('<slick init-on-load="true"></slick>');
      expect(element).toBeDefined();
      expect(element.hasClass('slick-initialized')).toBe(true);
    });
  });

  describe('Callback methods', function () {
    it('onInit invoked after init', function () {
      var scope = $rootScope.$new();
      var called = false;
      scope.myOnInit = function() {
        called = true;
      };
      element = compileTemplate('<slick init-on-load="true" on-init="myOnInit"></slick>', scope);
      expect(called).toBe(true);
    });
	});

  describe('slide changes', function() {
    it('changes current index', function() {
      var scope = $rootScope.$new();
      scope.currentIndex = 0;
      element = compileTemplate(
        '<slick init-on-load="true" current-index="currentIndex">' +
          '<div>1</div>' +
          '<div>2</div>' +
          '<div>3</div>' +
        '</slick>',
        scope
      );

      scope.$apply(function() {
        scope.currentIndex = 1;
      });
      scope.$digest();

      expect(element.slick('slickCurrentSlide')).toBe(1);
    });
  });

});
