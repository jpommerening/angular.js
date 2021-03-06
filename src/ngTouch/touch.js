'use strict';

/**
 * @ngdoc overview
 * @name ngTouch
 * @description
 *
 * # ngTouch
 *
 * The `ngTouch` module provides touch events and other helpers for touch-enabled devices.
 * The implementation is based on jQuery Mobile touch event handling 
 * ([jquerymobile.com](http://jquerymobile.com/)).
 *
 * {@installModule touch}
 *
 * See {@link ngTouch.$swipe `$swipe`} for usage.
 *
 * <div doc-module-components="ngTouch"></div>
 *
 */

// define ngTouch module
/* global -ngTouch, -ngModule */
var ngTouch = angular.module('ngTouch', []);

// export for UMD wrapper
var ngModule = ngTouch;

