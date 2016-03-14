describe('Places controller', function() {

  var $controller, $q, $rootScope, dataService, searchFilterService;

  beforeEach(module('app.shared'));
  beforeEach(module('app.searchFilter'));
  beforeEach(module('app.places'));

  beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _dataService_, _searchFilterService_) {
    $controller = _$controller_;
    $q = _$q_;
    $rootScope = _$rootScope_;
    dataService = _dataService_;
    searchFilterService = _searchFilterService_;
  }));

  it('should be created successfully', function() {
    var controller = $controller('PlacesController', dataService, searchFilterService);
    expect(controller).toBeDefined;
  });

  describe('after activate', function() {
    beforeEach(function() {
      sinon.stub(dataService, 'getPlaces', function() {
        var deferred = $q.defer();
        deferred.resolve([]);
        return deferred.promise;
      });
    });

    it('should get the list of places from places service with specified filter', function() {
      sinon.stub(searchFilterService, 'getFilter', function() {
        return {type: 'restaurante'};
      });

      $controller('PlacesController', dataService, searchFilterService);
      $rootScope.$apply();

      expect(dataService.getPlaces.firstCall.args[0])
        .toEqual({type: 'restaurante'});
    });

    it('should get the list of places from places service with undefined filter', function() {
      sinon.stub(searchFilterService, 'getFilter', function() {
        return undefined;
      });

      $controller('PlacesController', dataService, searchFilterService);
      $rootScope.$apply();

      expect(dataService.getPlaces.firstCall.args[0])
        .toEqual(undefined);
    });
  });
});
