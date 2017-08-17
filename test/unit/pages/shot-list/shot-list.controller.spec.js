(function () {
  describe('Teste unitário shotListCtrl',  function() {

    var controller, scope, state, backEnd;

    beforeEach(module('app'));
    beforeEach(module('app.pages.shotList'));
    beforeEach(module('dadosMockadosShotsApi'));

    beforeEach(inject(function($controller, $state, shotsApiMockFactory) {
      backEnd = shotsApiMockFactory;
      controller = $controller;
      state = $state;
      scope = {};
    }));

    it('Chamada da página sem parametros', function () {
      controller('shotListCtrl', { $scope: scope });
      expect(state.params).toEqual({});
    });

    it('Função ajustaTamanho - small', function () {
      controller('shotListCtrl', { $scope: scope });
      scope.ajustarTamanho(1);
      expect(scope.size).toEqual('small');
    });

    it('Função ajustaTamanho - medium', function () {
      controller('shotListCtrl', { $scope: scope });
      scope.ajustarTamanho(2);
      expect(scope.size).toEqual('medium');
    });

    it('Função ajustaTamanho - large', function () {
      controller('shotListCtrl', { $scope: scope });
      scope.ajustarTamanho(3);
      expect(scope.size).toEqual('large');
    });

    it('Função ajustaTamanho - opção default', function () {
      controller('shotListCtrl', { $scope: scope });
      scope.ajustarTamanho('valor qualquer');
      expect(scope.size).toEqual('small');
    });

    it('Funções onInit, getMoreShots e atualizaFiltros - testando atualizaFiltros', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.onInit();
      backEnd.finishRequests();
      expect(scope.filtrosAtivos).toEqual(', , ');
    });

    it('Funções onInit, getMoreShots e atualizaFiltros - testando atualizaFiltros com date e category', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.filtro = {};
      scope.filtro.date = new Date();
      scope.filtro.category = 'playoffs';
      scope.onInit();
      backEnd.finishRequests();
      expect(scope.filtrosAtivos).toEqual('Playoffs');
    });

    it('Funções onInit e getMoreShots - cobertura apenas getMoreShots com filtros - ', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.filtro = {};
      scope.filtro.timeframe = 'week';
      scope.filtro.category = 'teams';
      scope.filtro.date = new Date();
      scope.onInit();
      backEnd.finishRequests();
    });

    it('Função buscar - filtros padroes', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.filtro.page = 10;
      scope.buscar();
      backEnd.finishRequests();
      expect(scope.filtro.page).toEqual(10);
    });

    it('Função buscar - filtros customizados', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.filtro.page = 10;
      scope.filtro = {};
      scope.filtro.timeframe = 'week';
      scope.filtro.category = 'teams';
      scope.filtro.date = new Date();
      scope.filtro.sort = 'recent';
      scope.buscar();
      backEnd.finishRequests();
      expect(scope.filtro.page).toEqual(1);
    });

    it('Função carregarAnterior', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.filtro.page = 2;
      scope.carregarAnterior();
      backEnd.finishRequests();
      expect(scope.filtro.page).toEqual(1);
    });

    it('Função carregarProxima', function () {
      controller('shotListCtrl', { $scope: scope });
      backEnd.mockGetShots();
      scope.filtro.page = 1;
      scope.carregarProxima();
      backEnd.finishRequests();
      expect(scope.filtro.page).toEqual(2);
    });

  });
})();
