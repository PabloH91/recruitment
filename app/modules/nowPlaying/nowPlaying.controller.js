(function IIFE() {
    'use strict';

    angular.module('hangarSongs')
        .controller('nowPlaying.controller', nowPlayingController);

    nowPlayingController.$inject = ['music.service', 'spotifyMusic.model', 'Spotify'];

    function nowPlayingController(musicService, spotifyMusicModel, spotifyService) {
        var vm = this;

        // Public functions

        // Public variables
        vm.musicServiceData = musicService.data;
        vm.arrayOfSongIds = [];
        vm.arrayOfSongObjs = [];

        // Declaration of private functions
        function _init() {
            musicService.getPersonalMusicList().then(function () {
                vm.arrayOfSongIds = spotifyMusicModel.getArrayOfIds(vm.musicServiceData.personalMusicList);
                spotifyService.getTracks(vm.arrayOfSongIds).then(function (response) {
                    vm.arrayOfSongObjs = response.tracks;
                });
            });
        }
        _init();
    }
}());