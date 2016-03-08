describe('Search controller', function() {

  var controller, placesService;

  beforeEach(module('app.places'));
  beforeEach(module('app.search'));

	beforeEach(inject(function($controller, $q, $rootScope, _placesService_) {
    placesService = _placesService_;

    sinon.stub(placesService, 'getTypes', function() {
      var deferred = $q.defer();
      deferred.resolve([
        {name: 'Restaurante', value: 'restaurante'},
        {name: 'Bar', value: 'bar'},
        {name: 'Casa noturna', value: 'casa noturna'}
      ]);
      return deferred.promise;
    });

		controller = $controller('SearchController', placesService);
    $rootScope.$apply();
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined;
  });

  it('should call places service with filter by type', function() {
    spyOn(placesService, 'setFilter');

    controller.selectedType = {
      name: 'Restaurante',
      value: 'restaurante'
    };
  	controller.search();

		expect(placesService.setFilter).toHaveBeenCalledWith({type: 'restaurante'});
  });

  describe('after activate', function() {
    it('should initialize default list of types from places service', function() {
      expect(controller.types.length).toEqual(3);
    });
  });
});
