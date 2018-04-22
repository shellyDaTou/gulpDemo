(function() {
    "use strict";

    angular
        .module('kayApp')
        .config(httpConfig);

    httpConfig.$inject = ['$urlRouterProvider', '$httpProvider','$locationProvider'];
    function httpConfig($urlRouterProvider, $httpProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/main/resource');

        // 拦截器
    }

})();