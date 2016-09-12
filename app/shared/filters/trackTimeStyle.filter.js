(function IIFE() {
    'use strict';

    angular.module('hangarSongs.filters')
        .filter('trackTimeStyle', trackTimeStyleFilter);

    trackTimeStyleFilter.$inject = [];

    function trackTimeStyleFilter() {
        return function (timeInS) {
            var timeInMs, ms, s, min;

            function _addZero(n) {
                return (n < 10 ? '0' : '') + n;
            }

            if (angular.isDefined(timeInS) && angular.isNumber(timeInS) && timeInS === timeInS) {
                timeInMs = timeInS * 1000;
                ms = timeInMs % 1000;
                timeInS = (timeInMs - ms) / 1000;
                s = timeInS % 60;
                timeInS = (timeInS - s) / 60;
                min = timeInS % 60;

                return min + ':' + _addZero(s);
            } else {
                return '0:00';
            }
        };
    }
}());