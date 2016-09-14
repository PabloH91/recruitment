(function IIFE() {
    'use strict';

    angular.module('hangarSongs.directives')
        .directive('hangarSongsNavigation', hangarSongsNavigationDirective);

    hangarSongsNavigationDirective.$inject = [];

    function hangarSongsNavigationDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/hangarSongsNavigation/hangarSongsNavigation.template.html'
        };
    }
}());