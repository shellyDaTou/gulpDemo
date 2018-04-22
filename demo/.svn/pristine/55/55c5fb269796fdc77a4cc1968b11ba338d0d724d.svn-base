(function() {
    "use strict";

    angular
        .module('kayApp')
        .factory('stateHandler', stateHandler);

    stateHandler.$inject = ['$rootScope', '$state'];
    function stateHandler($rootScope, $state) {
        return {
            initialize: initialize
        };
        
        function initialize() {
            var stateChangeStart = $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState) {
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;
                $rootScope.fromState = fromState;
            });

            var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess',  function(event, toState, toParams, fromState, fromParams) {
                //
            });
        }
    }

})();