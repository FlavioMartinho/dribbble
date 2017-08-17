(function () {
  'use strict';

  angular.module('app.interceptors.authorization').factory("authorizationInterceptor", function ($q, $location, token) {
    return {
      request: function(config) {
        config.headers = config.headers || {};
        config.data = config.data || {};
        if (config.method.toUpperCase() === "GET") {
          config.headers.Authorization = 'Bearer ' + token.read;
        }
        if (config.method.toUpperCase() === "POST" || config.method.toUpperCase() === "DELETE") {
          config.headers.Authorization = 'Bearer ' + token.write;
          config.data.access_token = token.write;
        }
        return config;
      }
    };
  });

})();
