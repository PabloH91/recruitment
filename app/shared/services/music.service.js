(function IIFE() {
    'use strict';

    angular.module('hangarSongs.services')
        .service('music.service', musicService);

    musicService.$inject = ['music.repository'];

    function musicService(musicRepository) {
        var serviceData = {
            musicList: [],
            personalMusicList: []
        };
        var service = {
            getMusicList: getMusicList,
            getPersonalMusicList: getPersonalMusicList,

            data: serviceData
        };
        return service;

        /**
         * getMusicList
         * Requests default music list from repository. Updates serviceData.musicList
         * with response data.
         */
        function getMusicList() {
            musicRepository.getMusicList().then(onSuccess, onError);

            function onSuccess(response) {
                serviceData.musicList = response.data.songs;
                // return response;
            }
            function onError(error) {
                console.log('error in getMusicList()');
                console.log(error);
            }
        }

        /**
         * getPersonalMusicList
         * Requests custom music list from repository. Updates serviceData.personalMusicList
         * with response data.
         */
        function getPersonalMusicList() {
            return musicRepository.getPersonalMusicList().then(onSuccess, onError);

            function onSuccess(response) {
                serviceData.personalMusicList = response.data.songs;
            }
            function onError(error) {
                console.log('error in getMusicList()');
                console.log(error);
            }
        }
    }
}());