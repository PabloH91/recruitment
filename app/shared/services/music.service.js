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