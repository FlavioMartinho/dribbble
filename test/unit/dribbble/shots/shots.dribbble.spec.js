(function () {
  describe('Teste unitário shotsApi',  function() {
      var shotsApi;

      beforeEach(module('app.dribbble'));
      beforeEach(module('app.dribbble.shots'));

      beforeEach(inject(function(_shotsApi_) {
        shotsApi = _shotsApi_;
      }));

      it("deve ser a factory shotsApi", function() {
        expect(typeof shotsApi).toBe('function');
      });
  });
})();
