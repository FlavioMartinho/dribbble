(function () {
  'use strict';

  angular.module('app.dribbble.shots').factory('shotsApi', function ($resource) {
      var BASE_URL = 'https://api.dribbble.com/v1/shots';
      return $resource(BASE_URL, null, {
            getShots: {
              method: 'GET',
              isArray: true
            },
            checkLike: {
              url: BASE_URL + '/:id/like',
              method: 'GET',
              params: { id: '@id' }
            },
            likeShot: {
              url: BASE_URL + '/:id/like',
              method: 'POST',
              params: { id: '@id' }
            },
            unLikeShot: {
              url: BASE_URL + '/:id/like',
              method: 'DELETE',
              params: { id: '@id' }
            }
      });
  });

})();
