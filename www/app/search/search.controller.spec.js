describe('Search controller', function() {
  var $controller, $q, $rootScope, $ionicLoading, $ionicPopup, dataService;

  beforeEach(module('app.shared'));
  beforeEach(module('app.search'));

  beforeEach(module(function($provide) {
    $provide.value('$ionicTemplateCache', function(){} );
  }));

  beforeEach(module(function($urlRouterProvider) {
    $urlRouterProvider.deferIntercept();
  }));

	beforeEach(inject(function(_$controller_, _$q_, _$rootScope_,
    _$ionicLoading_, _$ionicPopup_, _dataService_) {
    $q = _$q_;
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $ionicLoading = _$ionicLoading_;
    $ionicPopup = _$ionicPopup_;
    dataService = _dataService_;
  }));

  it('should be created successfully', function() {
    var controller = $controller('SearchController', $ionicLoading, $ionicPopup, dataService);
    $rootScope.$apply();

    expect(controller).toBeDefined;
  });

  it('should initialize the search term as an empty string when created', function() {
    var controller = $controller('SearchController', $ionicLoading, $ionicPopup, dataService);
    $rootScope.$apply();

    expect(controller.searchTerm).toEqual('');
  });

  it('should initialize the search results as an empty array when created', function() {
    var controller = $controller('SearchController', $ionicLoading, $ionicPopup, dataService);
    $rootScope.$apply();

    expect(controller.searchResults).toEqual([]);
  });

  describe('search()', function() {
    it('should search for places with the given search term', function() {
      sinon.stub(dataService, 'getPlaces', function(searchTerm) {
        var deferred = $q.defer();
        deferred.resolve([{name: 'Buongustaio'}]);
        return deferred.promise;
      });
      var controller = $controller('SearchController', $ionicLoading, $ionicPopup, dataService);
      controller.searchTerm = 'restaurante';

      controller.search();
      $rootScope.$apply();

      expect(dataService.getPlaces.firstCall.args[0]).toEqual({keyword: 'restaurante'});
      expect(controller.searchResults).toEqual([{name: 'Buongustaio'}]);
    });

    it("should set the controller's searchResults to the ones returned by dataService", function() {
      sinon.stub(dataService, 'getPlaces', function(searchTerm) {
        var deferred = $q.defer();
        deferred.resolve([{name: 'Buongustaio'}]);
        return deferred.promise;
      });
      var controller = $controller('SearchController', $ionicLoading, $ionicPopup, dataService);
      controller.searchTerm = 'restaurante';

      controller.search();
      $rootScope.$apply();

      expect(controller.searchResults).toEqual([{name: 'Buongustaio'}]);
    });

    it('should not perform a search if the searchTerm is empty', function() {
      sinon.spy(dataService, 'getPlaces');
      var controller = $controller('SearchController', $ionicLoading, $ionicPopup, dataService);
      controller.searchTerm = '';

      controller.search();

      expect(dataService.getPlaces.called).toBe(false);
    })
  });
});
