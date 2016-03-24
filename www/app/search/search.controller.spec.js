describe('Search controller', function() {
  var $controller, $q, $rootScope, dataService;

  beforeEach(module('app.shared'));
  beforeEach(module('app.search'));

	beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _dataService_) {
    $q = _$q_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    dataService = _dataService_;
  }));

  it('should be created successfully', function() {
    var controller = $controller('SearchController', dataService);
    $rootScope.$apply();

    expect(controller).toBeDefined;
  });

  describe('search()', function() {
    it('should search for places with the given search term', function() {
      sinon.stub(dataService, 'getPlaces', function(searchTerm) {
        var deferred = $q.defer();
        deferred.resolve([{name: 'Buongustaio'}]);
        return deferred.promise;
      });
      var controller = $controller('SearchController', dataService);
      controller.searchTerm = 'restaurante';

      controller.search();
      $rootScope.$apply();

      expect(dataService.getPlaces.firstCall.args[0]).toEqual('restaurante');
      expect(controller.searchResults).toEqual([{name: 'Buongustaio'}]);
    });
  });
});
