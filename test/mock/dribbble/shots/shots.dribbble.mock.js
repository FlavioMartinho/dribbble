(function () {
  'use strict';

  angular.module('dadosMockadosShotsApi', []).factory('shotsApiMockFactory', shotsApiMockFactory);

  /** @ngInject */
  function shotsApiMockFactory($httpBackend) {

    var urlRegex = /\https\:\/\/api\.dribbble\.com\/v1\/shots/;

    return {
      mockGetShots: mockGetShots,
      mockCheckLikeTrue: mockCheckLikeTrue,
      mockCheckLikeFalse: mockCheckLikeFalse,
      mockLikeShot: mockLikeShot,
      mockUnLikeShot: mockUnLikeShot,
      finishRequests: finishRequests
    };

    function finishRequests() {
      $httpBackend.flush();
    }

    function mockGetShots() {
      $httpBackend.when('GET', urlRegex)
        .respond(function (method, url, data) {
          data = [{'id':'1'}];
          return [200, data];
        });
    }

    function mockCheckLikeTrue() {
      $httpBackend.when('GET', urlRegex)
        .respond(function (method, url, data) {
          data = {};
          return [200, data];
        });
    }

    function mockCheckLikeFalse() {
      $httpBackend.when('GET', urlRegex)
        .respond(function (method, url, data) {
          data = {};
          return [400, data];
        });
    }

    function mockLikeShot() {
      $httpBackend.when('POST', urlRegex)
        .respond(function (method, url, data) {
          data = {};
          return [200, data];
        });
    }

    function mockUnLikeShot() {
      $httpBackend.when('DELETE', urlRegex)
        .respond(function (method, url, data) {
          data = {};
          return [200, data];
        });
    }

  }
})();
