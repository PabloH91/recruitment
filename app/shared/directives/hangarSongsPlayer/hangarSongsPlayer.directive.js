(function IIFE() {
    'use strict';

    angular.module('hangarSongs.directives')
        .directive('hangarSongsPlayer', hangarSongsPlayerDirective);

    hangarSongsPlayerDirective.$inject = ['ngAudio'];

    function hangarSongsPlayerDirective(ngAudio) {
        return {
            restrict: 'E',
            scope: {
                songsList: '='
            },
            templateUrl: 'app/shared/directives/hangarSongsPlayer/hangarSongsPlayer.template.html',
            link: postLink
        };

        function postLink(scope, iElement, iAttrs) {
            // exposing public functions
            scope.prevSong = prevSong;
            scope.nextSong = nextSong;
            scope.getAlbumCover = getAlbumCover;

            // public variables
            scope.currentSongPosition = {
                position: 0,
                isFirst: true,
                isLast: true
            };

            // private functions
            /**
             * _changeAudioElement
             * Updates the scope.currentSong src and auto-plays it.
             * Checks if there's an ngAudio object in the scope to stop previous audio.
             */
            function _changeAudioElement() {
                if (scope.currentSong) {
                    scope.currentSong.stop();
                }
                scope.currentSong = ngAudio.load(scope.songsList[scope.currentSongPosition.position].preview_url);
                scope.currentSong.play(); // auto-play
            }
            /**
             * _checkSongPositioning
             * Checks if the current song is the first or last and updtes 
             * scope.currentSongPosition accordingly.
             */
            function _checkSongPositioning() {
                scope.currentSongPosition.isFirst = scope.currentSongPosition.position === 0;
                scope.currentSongPosition.isLast = scope.currentSongPosition.position === scope.songsList.length - 1;
            }

            // declaration of public functions
            /**
             * prevSong
             * Moves to previous song.
             * Decreases scope.currentSongPosition.position by 1, then checks song
             * position and updates audio src to match new scope.currentPosition.
             */
            function prevSong() {
                scope.currentSongPosition.position -= 1;
                _checkSongPositioning();
                _changeAudioElement();
            }

            /**
             * nextSong
             * Moves to next song.
             * Increases scope.currentSongPosition.position by 1, then checks song
             * position and updates audio src to match new scope.currentPosition.
             */
            function nextSong() {
                scope.currentSongPosition.position += 1;
                _checkSongPositioning();
                _changeAudioElement();
            }

            /**
             * getAlbumCover
             * Checks the array of images the spotifyService returns and tries to find 
             * a 300x300 image. If not found, picks first one (largest size available).
             * @return {[String]} url to best-sized image
             */
            function getAlbumCover() {
                var i;
                if (scope.songsList.length > 0) {
                    for (i = scope.songsList[scope.currentSongPosition.position].album.images.length; i > 0; i--) {
                        if (scope.songsList[scope.currentSongPosition.position].album.images[i - 1].height === 300) {
                            return scope.songsList[scope.currentSongPosition.position].album.images[i - 1].url;
                        }
                    }
                    return scope.songsList[scope.currentSongPosition.position].album.images[0].url;
                }
            }

            // watchers
            // watches for changes to scope.songsList to know to check song position
            // and update audio first time loading the songsList.
            scope.$watch('songsList', function (newVal) {
                if (newVal.length > 0) {
                    _checkSongPositioning();
                    _changeAudioElement();
                }
            });
        }
    }
}());