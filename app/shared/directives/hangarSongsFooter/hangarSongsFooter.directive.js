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
            // DOM-Element variables
            var containerElem = iElement.find('div.container');
            var copyrightElem = iElement.find('div.copyright-container');
            var contactElem = iElement.find('div.contact-container');
            // Width of DOM Elements
            var containerElemWidth = containerElem.width();
            var copyrightElemWidth = copyrightElem.width();
            var contactElemWidth = contactElem.width();

            /**
             * _checkFooterWidth
             * Checks if both elements fit in current footer container.
             * Toggles appropriate classes on DOM elements.
             */
            function _checkFooterWidth() {
                if (containerElemWidth < copyrightElemWidth + contactElemWidth) {
                    copyrightElem.removeClass('pull-left');
                    contactElem.removeClass('pull-right');
                    containerElem.addClass('centered');
                } else {
                    copyrightElem.addClass('pull-left');
                    contactElem.addClass('pull-right');
                    containerElem.removeClass('centered');
                }
            }
            _checkFooterWidth();

            // watches resizing of window to trigger _checkFooterWidth with
            // updated width values.
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