(function IIFE() {
    'use strict';

    angular.module('hangarSongs', [
        'ngRoute',
        'ngAudio',
        'spotify',
        'hangarSongs.repositories',
        'hangarSongs.services',
        'hangarSongs.directives',
        'hangarSongs.filters',
        'hangarSongs.models'
    ]);
    angular.module('hangarSongs.repositories', []);
    angular.module('hangarSongs.services', []);
    angular.module('hangarSongs.directives', []);
    angular.module('hangarSongs.filters', []);
    angular.module('hangarSongs.models', []);
}());