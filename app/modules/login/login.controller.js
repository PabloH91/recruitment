(function IIFE() {
    'use strict';

    angular.module('hangarSongs')
        .controller('login.controller', loginController);

    loginController.$inject = [];

    function loginController() {
        var vm = this;

        // Public functions
        
        // Public variables
        vm.loginInfo = {
            username: '',
            password: ''
        };
        // Declaration of private functions
        function _init() {
        }
        _init();
    }
}());