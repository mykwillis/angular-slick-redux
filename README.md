angular-slick
=============
[![Build Status](https://travis-ci.org/mykwillis/angular-slick.png?branch=master)](https://travis-ci.org/mykwillis/angular-slick)

AngularJS directive for [slick-carousel](http://kenwheeler.github.io/slick/).

This directive wraps the slick-carousel in an AngularJS directive so that it can be easily used
in AngularJS fashion. It was written to be used with version 1.5 or later of slick.


Installation
------------

* Through bower: `bower install angular-slick --save`
* Through npm: `npm install angular-slick --save`
* Download from github: [angular-slick.min.js](https://raw.github.com/mykwillis/angular-slick/master/angular-slick.min.js)


Usage
-----
Include both **slick.js** (from slick-carousel) and **angular-slick.js** in your application.

```html
<script src="components/slick/slick.js"></script>
<script src="components/angular-slick/angular-slick.js"></script>
```

Add the module `angularSlick` as a dependency to your app module:

```js
var myapp = angular.module('myapp', ['angularSlick']);
```

That being done, you can use the `<slick>` directive in your templates like:

```html
<slick data="collection" dots=true infinite=false on-after-change="myAfterChangeHandler">
  <div ng-repeat="collection">
    <!-- ... -->
  </div>
</slick>
```


Using ng-repeat for Slide Data
------------------------------
It's common to want to populate the slides to be used with angular-slick with the
`ngRepeat` directive. Because of the way the (jQuery-based) slick-carousel control
manipulates the DOM, you have to be sure that it is disabled (via `ng-if`) whenever
the data supplying the ngRepeat is manipulated.

The general pattern to use is like this:

    <slick ng-if="dataReady">
      <div ng-repeat="item in data">
        {{ item }}
      </div>
    </slick>

Then in the controller that populates `controller`:

    ```JavaScript
    function Controller($scope, $timeout) {
      function _updateData(newData) {
        // We need to allow Angular to run two digest cycles; during the first
        // one we remove the <slick> element by causing `ng-if` to evaluate to
        // `false`, and only then do we update the $scope data and allow the
        // ng-repeat to re-render. $timeout runs after the digest cycle is
        // complete.
        $scope.dataReady = false;   // remove <slick> element on this digest cycle
        $timeout(function() {       // after digest is complete, update ng-repeat data
          $scope.data = newData
          $scope.dataReady = true;
        });
    }

If you don't disable <slick> when changing data, the ng-repeat directive gets really
confused by the cruft it left in the DOM and Bad Things happen.


Callbacks
----------
There are several callback functions you can register to be used as event handlers
for various slick events. To use them, define a function in your controller and attach it to
the current scope, then just give its name (no parens!) in the appropriate directive attribute:

```html
    <slick ... onAfterChange="myAfterChangeHandler" ... >
```

The callback will be invoked with the same parameters as documented in slick-carousel.


License
-------

Released under the terms of the [MIT License](LICENSE).
