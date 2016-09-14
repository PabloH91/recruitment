(function IIFE() {
    'use strict';

    angular.module('hangarSongs.directives')
        .directive('hangarSongsPlayer', hangarSongsPlayerDirective);

    hangarSongsPlayerDirective.$inject = ['$rootScope', 'ngAudio'];

    function hangarSongsPlayerDirective($rootScope, ngAudio) {
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
            scope.isPaused = isPaused;
            scope.playAudio = playAudio;
            scope.pauseAudio = pauseAudio;
            scope.getProgress = getProgress;
            scope.prevSong = prevSong;
            scope.nextSong = nextSong;
            scope.getCurrentTime = getCurrentTime;
            scope.getRemainingTime = getRemainingTime;
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
                if ($rootScope.currentSong) {
                    $rootScope.currentSong.stop();
                }
                $rootScope.currentSong = ngAudio.load(scope.songsList[scope.currentSongPosition.position].preview_url);
                $rootScope.currentSong.play(); // auto-play
            }
            /**
             * _checkSongPositioning
             * Checks if the current song is the first or last and updates
             * scope.currentSongPosition accordingly.
             */
            function _checkSongPositioning() {
                scope.currentSongPosition.isFirst = scope.currentSongPosition.position === 0;
                scope.currentSongPosition.isLast = scope.currentSongPosition.position === scope.songsList.length - 1;
            }

            // declaration of public functions
            /**
             * isPaused
             * Returns whether there is a currentSong object found and it has the
             * paused attribute set to true.
             * @return {Boolean} 
             */
            function isPaused() {
                return $rootScope.currentSong && $rootScope.currentSong.paused;
            }

            /**
             * playAudio
             * Calls play function from current song in $rootScope.
             */
            function playAudio() {
                if (angular.isDefined($rootScope.currentSong)) {
                    $rootScope.currentSong.play();
                }
            }

            /**
             * pauseAudio
             * Calls pause function from current song in $rootScope.
             */
            function pauseAudio() {
                if (angular.isDefined($rootScope.currentSong)) {
                    $rootScope.currentSong.pause();
                }
            }

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
             * getProgress
             * Returns the progress (value between 0 and 1) of the current song.
             * @return {Number}
             */
            function getProgress() {
                if (angular.isDefined($rootScope.currentSong)) {
                    return $rootScope.currentSong.progress;
                }
            }

            /**
             * getCurrentTime
             * Returns the time of the current song in seconds.
             * @return {Number}
             */
            function getCurrentTime() {
                if (angular.isDefined($rootScope.currentSong)) {
                    return $rootScope.currentSong.currentTime;
                }
            }

            /**
             * getRemainingTime
             * Returns remaining time (before end of song) of current song in seconds.
             * @return {Number}
             */
            function getRemainingTime() {
                if (angular.isDefined($rootScope.currentSong)) {
                    return $rootScope.currentSong.remaining;
                }
            }

            /**
             * getAlbumCover
             * Checks the array of images the spotifyService returns and tries to find 
             * a 300x300 image. If not found, picks first one (largest size available).
             * @return {String} url to best-sized image
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
                // check there isn't music currently playing
                if (newVal.length > 0) {
                    _checkSongPositioning();
                    if (!$rootScope.currentSong) {
                        _changeAudioElement();
                    }
                }
            });
        }
    }
}());