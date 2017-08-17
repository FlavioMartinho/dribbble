(function () {
  'use strict';

  angular.module('app.interceptors', [
    'app.interceptors.authorization',
    'app.interceptors.loading'
  ]);

})();
