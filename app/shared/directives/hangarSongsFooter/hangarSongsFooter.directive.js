(function IIFE() {
    'use strict';

    angular.module('hangarSongs.directives')
        .directive('hangarSongsFooter', hangarSongsFooterDirective);

    hangarSongsFooterDirective.$inject = ['$window'];

    function hangarSongsFooterDirective($window) {
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/hangarSongsFooter/hangarSongsFooter.template.html',
            link: postLink
        };

        function postLink(scope, iElement, iAttrs) {
            // scope.width = $window.innerWidth;
            var containerElem = iElement.find('div.container');
            var copyrightElem = iElement.find('div.copyright-container');
            var contactElem = iElement.find('div.contact-container');

            var containerElemWidth = containerElem.width();
            var copyrightElemWidth = copyrightElem.width();
            var contactElemWidth = contactElem.width();

            function _checkFooterWidth() {
                if (containerElemWidth < copyrightElemWidth + contactElemWidth) {
                    copyrightElem.removeClass('pull-left');
                    contactElem.removeClass('pull-right');
                } else {
                    copyrightElem.addClass('pull-left');
                    contactElem.addClass('pull-right');
                }
            }
            _checkFooterWidth();

            angular.element($window).bind('resize', function () {
                containerElemWidth = containerElem.width();
                copyrightElemWidth = copyrightElem.width();
                contactElemWidth = contactElem.width();

                _checkFooterWidth();
                scope.$apply();
            });
        }
    }
}());