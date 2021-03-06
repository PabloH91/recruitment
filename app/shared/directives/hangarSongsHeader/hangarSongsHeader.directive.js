(function IIFE() {
    'use strict';

    angular.module('hangarSongs.directives')
        .directive('hangarSongsHeader', hangarSongsHeaderDirective);

    hangarSongsHeaderDirective.$inject = [];

    function hangarSongsHeaderDirective() {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/hangarSongsHeader/hangarSongsHeader.template.html',
            link: postLink
        };

        function postLink(scope, iElement, iAttrs) {
            // gets current year for copyright display
            scope.currentYear = new Date().getFullYear();
        }
    }
}());