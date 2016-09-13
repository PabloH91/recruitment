(function IIFE() {
    'use strict';

    angular.module('hangarSongs.models')
        .service('spotifyMusic.model', spotifyMusicModel);

    spotifyMusicModel.$inject = [];

    function spotifyMusicModel() {
        var model = {
            getArrayOfIds: getArrayOfIds
        };
        return model;

        /**
         * getArrayOfIds
         * @param  {[Array]} listOfIds, takes array of spotify Id Objects
         * @return {[Array]} array of strings (ids)
         */
        function getArrayOfIds(listOfIds) {
            var arrayOfIds = [],
                i;
            for (i = (listOfIds.length - 1); i >= 0; i--) {
                arrayOfIds[i] = listOfIds[i].id;
            }
            return arrayOfIds;
        }
    }
}());