(function () {
  'use strict';

  angular.module('app.configs.interceptor').config(function ($httpProvider) {
    $httpProvider.interceptors.push("authorizationInterceptor");
    $httpProvider.interceptors.push("loadingInterceptor");
  });

})();
