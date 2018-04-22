(function() {
    'use strict';

    angular
        .module("kayApp")
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state({
            name: 'main.follow',
            url: '/follow',
            templateUrl: 'app/main/follow/follow.html'
        });
    }

})();