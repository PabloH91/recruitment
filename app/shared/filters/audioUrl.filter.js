(function IIFE() {
    'use strict';

    angular.module('hangarSongs.filters')
        .filter('audioUrl', audioUrlFilter);

    audioUrlFilter.$inject = ['$sce'];

    function audioUrlFilter($sce) {
        return function (audioSrc) {
            return $sce.trustAsResourceUrl(audioSrc);
        };
    }
}());