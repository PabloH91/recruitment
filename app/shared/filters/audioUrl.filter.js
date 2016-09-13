(function IIFE() {
    'use strict';

    angular.module('hangarSongs.filters')
        .filter('audioUrl', audioUrlFilter);

    audioUrlFilter.$inject = ['$sce'];

    /**
     * audioUrlFilter
     * Filter to take urls and return them as trusted to be used as src.
     * @return {[Function]} takes a src url and returns it as a trusted url
     */
    function audioUrlFilter($sce) {
        return function (audioSrc) {
            return $sce.trustAsResourceUrl(audioSrc);
        };
    }
}());