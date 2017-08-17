(function () {
  'use strict';

  angular.module('app.pages.shot').controller("shotCtrl", function ($scope, $state, shotsApi) {

    $scope.shot = $state.params.shot;
    $scope.filtro = $state.params.filtro;

    $scope.curtirDescurtirShot = curtirDescurtirShot;
    $scope.onInit = onInit;

    if (!$state.params.shot) {
      $state.go('shots');
      return;
    }

    function verificaLike() {
      shotsApi.checkLike({id: $scope.shot.id},
        function() {
          $scope.liked = true;
        },
        function() {
          $scope.liked = false;
        });
    }

    function curtirDescurtirShot(idShot) {
      if ($scope.liked) {
        shotsApi.unLikeShot({id: idShot}, function() {
          $scope.liked = false;
          $scope.shot.likes_count--;
        });
      } else {
        shotsApi.likeShot({id: idShot}, function() {
          $scope.liked = true;
          $scope.shot.likes_count++;
        });
      }
    }

    function onInit() {
      angular.element("#bio").append($scope.shot.user.bio);
      angular.element("#descricao").append($scope.shot.description);
      verificaLike();
    }

  });

})();
