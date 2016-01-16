angular-slick
=============
[![Build Status](https://travis-ci.org/mykwillis/angular-click.png?branch=master)](https://travis-ci.org/mykwillis/angular-slick)

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
