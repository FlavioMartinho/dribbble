(function () {
  'use strict';

  angular.module('app.pages.shotList').controller("shotListCtrl", function ($scope, $state, $filter, shotsApi) {

    $scope.filtro = {};
    $scope.filtro.category = "any";
    $scope.filtro.date = "";
    $scope.filtro.sort = "popularity";
    $scope.filtro.timeframe  = "now";
    $scope.filtro.page = 1;

    $scope.filtro = $state.params.filtro || $scope.filtro;

    $scope.filtrosAtivos = "";
    $scope.shotList = [];
    $scope.size = "small";

    var oldCategory = $scope.filtro.category;
    var oldDate = $scope.filtro.date;
    var oldTimeframe = $scope.filtro.timeframe;
    var oldSort = $scope.filtro.sort;

    $scope.ajustarTamanho = ajustarTamanho;
    $scope.buscar = buscar;
    $scope.carregarAnterior = carregarAnterior;
    $scope.carregarProxima = carregarProxima;
    $scope.onInit = onInit;

    function ajustarTamanho(newSize) {
      switch (newSize) {
        case 1:
          $scope.size = "small";
          break;
        case 2:
          $scope.size = "medium";
          break;
        case 3:
          $scope.size = "large";
          break;
        default:
          $scope.size = "small";
      }
    }

    function atualizaFiltros() {
      var filtroFormatado = "";
      filtroFormatado += angular.element("#category-select option:selected").text() + ", ";
      if (!$scope.filtro.date) {
        filtroFormatado += angular.element("#timeframe-select option:selected").text() + ", ";
      } else {
        filtroFormatado += "em " + $filter('date')($scope.filtro.date, 'dd/MM/yyyy')   + ", ";
      }
      filtroFormatado += angular.element("#sort-select option:selected").text();

      if ($scope.filtro.category === 'playoffs') {
        filtroFormatado = "Playoffs";
      }
      $scope.filtrosAtivos = filtroFormatado;
    }

    function buscar(){
      var mudou = false;
      angular.element("#search-bar").removeClass('open');
      if (oldCategory !== $scope.filtro.category) {
        oldCategory = $scope.filtro.category;
        mudou = true;
      }
      if (oldDate !== $scope.filtro.date) {
        oldDate = $scope.filtro.date;
        mudou = true;
      }
      if (oldTimeframe !== $scope.filtro.timeframe) {
        oldTimeframe = $scope.filtro.timeframe;
        mudou = true;
      }
      if (oldSort !== $scope.filtro.sort) {
        oldSort = $scope.filtro.sort;
        mudou = true;
      }
      if (mudou) {
        $scope.shotList = [];
        $scope.filtro.page = 1;
      }
      getMoreShots();
    }

    function carregarAnterior() {
      $scope.filtro.page--;
      getMoreShots();
    }

    function carregarProxima() {
      $scope.filtro.page++;
      getMoreShots();
    }

    function getMoreShots() {
      var params = {};
      var isPlayoff = false;

      if ($scope.filtro.category !== "any") {
        params.list = $scope.filtro.category;
        if ($scope.filtro.category === "playoffs") {
          isPlayoff = true;
        }
      }

      if ($scope.filtro.timeframe !== "now" && !isPlayoff) {
        params.timeframe = $scope.filtro.timeframe;
      }

      if ($scope.filtro.sort !== "popularity" && !isPlayoff) {
        params.sort = $scope.filtro.sort;
      }

      if ($scope.filtro.date && !isPlayoff) {
        params.date = $scope.filtro.date;
      }

      params.page = $scope.filtro.page || 1;
      params.per_page = "30";

      shotsApi.getShots(params, function(response) {
        $scope.shotList = response;
        atualizaFiltros();
      });
    }

    function onInit() {
      angular.element('.dropdown-toggle').dropdown();
      var dateParams = {
        format: 'dd/mm/yyyy',
        autoclose: true,
        todayHighlight: true
      };
      angular.element('#dataEspecifica').datepicker(dateParams);
      getMoreShots();
    }


  });

})();
