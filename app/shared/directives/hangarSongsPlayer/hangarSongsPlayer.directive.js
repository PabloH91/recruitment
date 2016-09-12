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
            // private variables

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
            function _changeAudioElement() {
                if (scope.currentSong) {
                    scope.currentSong.stop();
                }
                scope.currentSong = ngAudio.load(scope.songsList[scope.currentSongPosition.position].preview_url);
                scope.currentSong.play(); // auto-play
            }
            function _checkSongPositioning() {
                scope.currentSongPosition.isFirst = scope.currentSongPosition.position === 0;
                scope.currentSongPosition.isLast = scope.currentSongPosition.position === scope.songsList.length - 1;
            }

            // declaration of public functions
            function prevSong() {
                scope.currentSongPosition.position -= 1;
                _checkSongPositioning();
                _changeAudioElement();
            }
            function nextSong() {
                scope.currentSongPosition.position += 1;
                _checkSongPositioning();
                _changeAudioElement();
            }
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
            scope.$watch('songsList', function (newVal) {
                if (newVal.length > 0) {
                    _checkSongPositioning();
                    _changeAudioElement();
                }
            });
        }
    }
}());