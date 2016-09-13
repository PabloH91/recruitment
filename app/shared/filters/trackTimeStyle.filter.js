(function IIFE() {
    'use strict';

    angular.module('hangarSongs.filters')
        .filter('trackTimeStyle', trackTimeStyleFilter);

    trackTimeStyleFilter.$inject = [];

    /**
     * trackTimeStyleFilter
     * Filter that takes a value in seconds and returns a formatted string.
     * @return {[Function]} 
     */
    function trackTimeStyleFilter() {
        return function (timeInS) {
            var timeInMs, ms, s, min;

            /**
             * _addZero
             * Takes a number and adds a 0 at the front if less than 10.
             * @param {[Number]} n
             * @return {[String]} string of length 2
             */
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