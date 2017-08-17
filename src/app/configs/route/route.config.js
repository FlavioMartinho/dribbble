(function () {
  'use strict';

  angular.module('app.configs.route').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

       $stateProvider
           .state('shots', {
               url: '/shots',
               controller: 'shotListCtrl',
               params: {
                 filtro: null
               },
               templateUrl: 'app/pages/shot-list/shots-list.template.html'
           })
           .state('shot', {
               url: '/shot',
               controller: 'shotCtrl',
               params: {
                 shot: null,
                 filtro: null
               },
               templateUrl: 'app/pages/shot/shot.template.html'
           })
           .state('error', {
               url: '/error',
               templateUrl: 'app/interceptors/error/error.template.html'
           });

       $urlRouterProvider.otherwise('/shots');

       $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });


  });

})();
