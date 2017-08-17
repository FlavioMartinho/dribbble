(function () {
  describe('Teste unitário shotCtrl',  function() {

    var controller, scope, state, backEnd;

    beforeEach(module('app'));
    beforeEach(module('app.pages.shot'));
    beforeEach(module('dadosMockadosShotsApi'));

    beforeEach(inject(function($controller, $state, shotsApiMockFactory) {
      backEnd = shotsApiMockFactory;
      controller = $controller;
      state = $state;
      scope = {};
    }));

    it('Chamada da página sem parametros', function () {
      controller('shotCtrl', { $scope: scope });
      expect(state.params).toEqual({});
    });

    it('Funções onInit chamando verificaLike recebendo false', function() {
      state.params.shot = { 'id' : '1', 'user' : { 'bio' : 'Biografia' }, 'description' : 'Descrição' };
      controller('shotCtrl', { $scope: scope });
      backEnd.mockCheckLikeFalse();
      scope.onInit();
      backEnd.finishRequests();
      expect(scope.liked).toBeFalsy();
    });

    it('Funções onInit chamando verificaLike recebendo true', function() {
      state.params.shot = { 'id' : '1', 'user' : { 'bio' : 'Biografia' }, 'description' : 'Descrição' };
      controller('shotCtrl', { $scope: scope });
      backEnd.mockCheckLikeTrue();
      scope.onInit();
      backEnd.finishRequests();
      expect(scope.liked).toBeTruthy();
    });

    it('Função curtirDescurtirShot curtindo um shot', function() {
      controller('shotCtrl', { $scope: scope });
      backEnd.mockLikeShot();
      scope.shot = {};
      scope.shot.likes_count = 0;
      scope.liked = false;
      scope.curtirDescurtirShot(1);
      backEnd.finishRequests();
      expect(scope.liked).toBeTruthy();
      expect(scope.shot.likes_count).toEqual(1);
    });

    it('Função curtirDescurtirShot descurtindo um shot', function() {
      controller('shotCtrl', { $scope: scope });
      backEnd.mockUnLikeShot();
      scope.shot = {};
      scope.shot.likes_count = 1;
      scope.liked = true;
      scope.curtirDescurtirShot(1);
      backEnd.finishRequests();
      expect(scope.liked).toBeFalsy();
      expect(scope.shot.likes_count).toEqual(0);
    });

  });
})();
