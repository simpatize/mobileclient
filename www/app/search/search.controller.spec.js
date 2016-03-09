describe('Search controller', function() {

  var controller, dataservice;

  beforeEach(module('app.shared'));
  beforeEach(module('app.search'));

	beforeEach(inject(function($controller, $q, $rootScope, _dataservice_) {
    dataservice = _dataservice_;

    sinon.stub(dataservice, 'getTypes', function() {
      var deferred = $q.defer();
      deferred.resolve([
        {name: 'Restaurante', value: 'restaurante'},
        {name: 'Bar', value: 'bar'},
        {name: 'Casa noturna', value: 'casa noturna'}
      ]);
      return deferred.promise;
    });

		controller = $controller('SearchController', dataservice);
    $rootScope.$apply();
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined;
  });

  it('should call dataservice with filter by type', function() {
    spyOn(dataservice, 'setFilter');

    controller.selectedType = {
      name: 'Restaurante',
      value: 'restaurante'
    };
  	controller.search();

		expect(dataservice.setFilter).toHaveBeenCalledWith({type: 'restaurante'});
  });

  describe('after activate', function() {
    it('should initialize default list of types from dataservice', function() {
      expect(controller.types.length).toEqual(3);
    });
  });
});
