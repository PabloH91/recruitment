(function IIFE() {
    'use strict';

    angular.module('hangarSongs')
        .config(['$routeProvider', configFn]);

    function configFn($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: ('app/modules/login/login.html'),
                controller: 'login.controller',
                controllerAs: 'loginCtrl'
            })
            .when('/', {
                templateUrl: ('app/modules/login/login.html'),
                controller: 'login.controller',
                controllerAs: 'loginCtrl'
            })
            .when('/nowPlaying', {
                templateUrl: ('app/modules/nowPlaying/nowPlaying.html'),
                controller: 'nowPlaying.controller',
                controllerAs: 'nowPlayingCtrl'
            })
            .otherwise({
                templateUrl: ('app/modules/musicList/musicList.html'),
                controller: 'musicList.controller',
                controllerAs: 'musicListCtrl'
            });
    }
}());