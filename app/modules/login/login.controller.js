(function IIFE() {
    'use strict';

    angular.module('hangarSongs')
        .controller('login.controller', loginController);

    loginController.$inject = ['$location'];

    function loginController($location) {
        var vm = this;

        // Private variables
        var emailRegex = new RegExp("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)");
        var passRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,24})");

        // Public functions
        vm.attemptLogin = attemptLogin;

        // Public variables
        vm.loginInfo = {
            username: '',
            password: ''
        };
        vm.minPasswordLength = 8;
        vm.maxPasswordLength = 24;
        vm.emailPassed = true;
        vm.passwordPassed = true;

        // Declaration of private functions
        function _init() {
        }
        _init();

        // Declaration of public functions
        function attemptLogin() {
            vm.emailPassed = emailRegex.test(vm.loginInfo.username);
            vm.passwordPassed = passRegex.test(vm.loginInfo.password);
            if (vm.emailPassed && vm.passwordPassed) {
                // redirect
                $location.path('/music')
            } else {
                // stay in same page
            }
        }
    }
}());