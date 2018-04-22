(function() {
    'use strict';

    angular
        .module("kayApp")
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state({
            name: 'main.resource',
            url: '/resource',
            templateUrl: 'app/main/resource/resource.html'
        });
    }

})();