(function IIFE() {
    'use strict';

    angular.module('hangarSongs')
        .controller('musicList.controller', musicListController);

    musicListController.$inject = ['music.service'];

    function musicListController(musicService) {
        var vm = this;

        // Public functions
        vm.searchForMusic = searchForMusic;
        vm.setDateSelection = setDateSelection;

        // Public variables
        vm.musicServiceData = musicService.data;
        vm.searchQuery = '';

        // Declaration of private functions
        function _init() {
            musicService.getMusicList();
        }
        _init();

        // Declaration of public functions
        function searchForMusic(song) {
            if (!vm.searchQuery ||
                    (song.artistname.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1) ||
                    (song.songname.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1)) {
                return true;
            }
            return false;
        }

        function setDateSelection(song, date) {
            song.dateSelection = date;
        }
    }
}());