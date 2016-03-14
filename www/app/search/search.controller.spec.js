describe('Search controller', function() {

  var controller, dataservice, searchFilterService;

  beforeEach(module('app.shared'));
  beforeEach(module('app.searchfilter'));
  beforeEach(module('app.search'));

	beforeEach(inject(function($controller, $q, $rootScope, _dataservice_, _searchFilterService_) {
    dataservice = _dataservice_;
    searchFilterService = _searchFilterService_;

    sinon.stub(dataservice, 'getTypes', function() {
      var deferred = $q.defer();
      deferred.resolve([
        {name: 'Restaurante', value: 'restaurante'},
        {name: 'Bar', value: 'bar'},
        {name: 'Casa noturna', value: 'casa noturna'}
      ]);
      return deferred.promise;
    });

		controller = $controller('SearchController', dataservice, searchFilterService);
    $rootScope.$apply();
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined;
  });

  it('should update searchFilter with filter by type', function() {
    spyOn(searchFilterService, 'setFilter');

    controller.selectedType = {
      name: 'Restaurante',
      value: 'restaurante'
    };
  	controller.search();

		expect(searchFilterService.setFilter).toHaveBeenCalledWith({type: 'restaurante'});
  });

  describe('after activate', function() {
    it('should initialize default list of types from dataservice', function() {
      expect(controller.types.length).toEqual(3);
    });
  });
});
