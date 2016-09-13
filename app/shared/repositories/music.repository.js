(function IIFE() {
    'use strict';

    angular.module('hangarSongs.repositories')
        .factory('music.repository', musicRepository);

    musicRepository.$inject = ['$http'];

    function musicRepository($http) {
        var repo = {
            getMusicList: getMusicList,
            getPersonalMusicList: getPersonalMusicList
        };
        return repo;

        // gets default songs json
        function getMusicList() {
            return $http({
                method: 'GET',
                url: encodeURI('db/songs.json'),
                params: {
                    format: 'jsonp',
                    json_callback: 'JSON_CALLBACK'
                }
            });
        }
        // gets custom songs json
        function getPersonalMusicList() {
            return $http({
                method: 'GET',
                url: encodeURI('db/mySongs.json'),
                params: {
                    format: 'jsonp',
                    json_callback: 'JSON_CALLBACK'
                }
            });
        }
    }
}());