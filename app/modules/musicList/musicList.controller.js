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
        /**
         * _init
         * Requests song data through musicService and spotifyService services.
         * Updates the values of vm.arrayOfSongIds and vm.arrayOfSongObjs.
         */
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
        /**
         * searchForMusic
         * Checks for matches to the vm.searchQuery through the songs' name and artist name.
         * @param  {[Object]} song, song Object returned by spotifyService
         * @return {[Boolean]} returns true if any of the following are true:
         *     a) no search query.
         *     b) search query matches artist name.
         *     c) search query matches song name.
         */
        function searchForMusic(song) {
            var artistMatch = song.artists[0].name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1;
            var songMatch = (song.name.toLowerCase().indexOf(vm.searchQuery.toLowerCase()) !== -1);

            return !vm.searchQuery || artistMatch || songMatch;
        }

        /**
         * setDateSelection
         * Set's song's dateSelection attribute based on button clicked.
         * @param {[Object]} song, song Object returned by spotifyService.
         * @param {[String]} date, dateSelection value. Either 'today' or 'friday'.
         */
        function setDateSelection(song, date) {
            song.dateSelection = date;
        }
    }
}());