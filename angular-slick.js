/* angular-slick.js / v0.1.0 / (c) 2016 Myk Willis / MIT Licence */
'use strict';

angular.module('angularSlick', []).directive('slick', [
  '$timeout',
  function ($timeout) {
    return {
      restrict: 'AEC',
      scope: {
        // Settings defined by underlying slick-carousel
        accessibility: '@',
        autoplay: '@',
        autoplaySpeed: '@',
        centerMode: '@',
        centerPadding: '@',
        cssEase: '@',
        customPaging: '&',    // BUGBUG: this probably needs special handling
        dots: '@',
        dotsClass: '@',
        draggable: '@',
        easing: '@',
        edgeFriction: '@',
        fade: '@',
        arrows: '@',
        appendArrows: '@',
        appendDots: '@',
        mobileFirst: '@',
        prevArrow: '@',
        nextArrow: '@',
        infinite: '@',
        initialSlide: '@',
        lazyLoad: '@',
        pauseOnHover: '@',
        pauseOnDotsHover: '@',
        respondTo: '@',
        responsive: '=', // object
        rows: '@',
        slide: '@',
        slidesPerRow: '@',
        slidesToShow: '@',
        slidesToScroll: '@',
        speed: '@',
        swipe: '@',
        swipeToSlide: '@',
        touchMove: '@',
        touchThreshold: '@',
        useCSS: '@',
        useTransform: '@',
        variableWidth: '@',
        vertical: '@',
        verticalSwiping: '@',
        rtl: '@',
        waitForAnimate: '@',
        zIndex: '@',

        // event handlers for events defined  by underlying slick-carousel
        // e.g., 'onAfterChange' is a handler for the 'afterChange' event.
        onAfterChange: '&',
        onBeforeChange: '&',
        onBreakpoint: '&',
        onDestroy: '&',
        onEdge: '&',
        onInit: '&',
        onReInit: '&',
        onSetPosition: '&',
        onSwipe: '&',

        // angular-slick-specific settings.
        initOnLoad: '@',    // if false, slick is only initialized when `data` is non-null
        currentIndex: '=',  // two-way; can be used to get or set current slide index
        data: '='           // bind to underlying data to force utomatic re-init on change
      },
      link: function (scope, element) {
        var initialized = false;

        function initializeSlick() {
          var slider = element;

          //
          // As per the Slick documentation, we need to hook up any event
          // handlers before we initialize the control. Event callbacks are
          // specified as `OnXxx` attributes on the <slick> directive, though
          // they are registered with the underlying slick control using the
          //  $().on('eventName', function() { ... })
          // syntax.
          //

          // First install our OnBeforeChange handler so that we can update currentIndex before
          // invoking any other calbacks.

          slider.on('onAfterChange', function _onAfterChange(event, slick, currentSlide) {
            void(event);
            void(slick);
            scope.$apply(function() {
              scope.currentIndex = currentSlide;
            });
          });


          var handlerNames = ['onAfterChange', 'onBeforeChange', 'onBreakpoint', 'onDestroy',
           'onEdge', 'onInit', 'onReInit', 'onSetPosition', 'onSwipe'];

          angular.forEach(handlerNames, function(handlerName) {
            if ( typeof scope[handlerName] !== 'undefined' ) {

              // e.g., 'onAfterChange' -> 'afterChange'
              var eventName = handlerName.charAt(2).toLowerCase() + handlerName.slice(2);

              // Passing arguments to callbacks specified in angular directives is weird.
              // http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-3-isolate-scope-and-function-parameters
              slider.on(eventName, scope[handlerName]());   // N.B. the ()'s are intentional!
            }
          });


          //
          // Collect any settings that were specified as attributes. Note that we intentionally
          // do not set settings values if we weren't given the attribute to make sure we get
          // correct defaults.
          //

          var settings = {};

          var settingNames = [ 'accessibility', 'autoplay', 'autoplaySpeed', 'centerMode',
            'centerPadding', 'cssEase:', 'customPaging', 'dots', 'dotsClass', 'draggable',
            'easing',  'edgeFriction:',  'fade', 'arrows', 'appendArrows', 'appendDots',
            'mobileFirst', 'prevArrow', 'nextArrow', 'infinite', 'initialSlide', 'lazyLoad',
            'pauseOnHover', 'pauseOnDotsHover', 'respondTo', 'responsive', 'rows', 'slide',
            'slidesPerRow', 'slidesToShow', 'slidesToScroll', 'speed', 'swipe', 'swipeToSlide',
            'touchMove', 'touchThreshold', 'useCSS', 'useTransform', 'variableWidth', 'vertical',
            'verticalSwiping', 'rtl', 'waitForAnimate', 'zIndex'];

          angular.forEach(settingNames, function(settingName) {
            if ( typeof scope[settingName] !== 'undefined' ) {
              settings[settingName] = scope[settingName];
            }
          });

          slider.slick(settings);
          initialized = true;
        }

        function destroySlick() {
          element.unslick();
          initialized = false;
        }

        scope.$watch('currentIndex', function (newVal) {
          if (newVal !== scope.currentIndex) {
            element.slick('slickGoTo', newVal);
          }
        });

        scope.$watch('data', function(newVal) {
          if (initialized) {
            destroySlick();
          }
          if (newVal) {
            $timeout(function() {
              initializeSlick();
            });
          }
        });

        if (scope.initOnLoad) {
          $timeout(function() {
            initializeSlick();
          });
        }
      }
    };
  }]);
