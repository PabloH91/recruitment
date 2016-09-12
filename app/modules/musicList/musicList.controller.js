(function IIFE() {
    'use strict';

    angular.module('hangarSongs')
        .controller('musicList.controller', musicListController);

    musicListController.$inject = ['music.service', 'spotifyMusic.model', 'Spotify'];

    function musicListController(musicService, spotifyMusicModel, spotifyService) {
        var vm = this;

        // Public functions
        vm.searchForMusic = searchForMusic;
        vm.setDateSelection = setDateSelection;

        // Public variables
        vm.musicServiceData = musicService.data;
        vm.arrayOfSongIds = [];
        vm.arrayOfSongObjs = [];
        vm.searchQuery = '';

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

        // Declaration of public functions
        function searchForMusic(song) {
            if (!vm.searchQuery ||
                    (song.artists[0].name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1) ||
                    (song.name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1)) {
                return true;
            }
            return false;
        }

        function setDateSelection(song, date) {
            song.dateSelection = date;
        }
    }
}());