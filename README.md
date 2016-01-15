angular-slick
=============

AngularJS directive for [slick-carousel](http://kenwheeler.github.io/slick/).

Copyright (C) 2016, Myk Willis <myk@mykwillis.com>

[![Build Status](https://travis-ci.org/mykwillis/angular-click.png?branch=master)](https://travis-ci.org/mykwillis/angular-slick)
[![Coverage Status](https://coveralls.io/repos/mykwillis/angular-slick/badge.png)](https://coveralls.io/r/urish/angular-slick)

### Built to work with Slick 1.5 and later.

---

Installation
------------

You can choose your preferred method of installation:
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


Callbacks
----------
There are several callback functions you can register to be used as event handlers
for various slick events.  When specifying them in the directive, you should *not*
use parenthesis:

<slick ... onAfterChange="myAfterChangeHandler" ... >

The parameters to callback functions are the same as defined in the slick-carousel
documentation.


License
----

Released under the terms of the [MIT License](LICENSE).
