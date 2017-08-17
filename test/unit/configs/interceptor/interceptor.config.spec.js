(function () {
  describe('$httpProvider interceptor config', function () {
      var $httpProvider;

      beforeEach(module('app.configs'));
      beforeEach(module('app.interceptors'));
      beforeEach(function () {
        module('app.configs.interceptor', function (_$httpProvider_) {
          $httpProvider = _$httpProvider_;
        });
        inject();
      });

      it('should add to $httpProvider interceptors', function () {
        expect($httpProvider.interceptors).toEqual(['authorizationInterceptor','loadingInterceptor']);
      });
    });
})();
