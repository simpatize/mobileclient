describe('Search controller', function() {

  var controller, placesService;

  beforeEach(module('app.places'));
  beforeEach(module('app.search'));

	beforeEach(inject(function($controller, _placesService_) {
    placesService = _placesService_;
		controller = $controller('SearchController', placesService);
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined;
  });

  it('should initialize default list of types', function() {
    var defaultTypes = [
      {name: 'Restaurante'},
      {name: 'Bar'},
      {name: 'Casa noturna'}
    ];

    expect(controller.types.length).toEqual(3);
    expect(controller.types).toEqual(defaultTypes);
  });

  it('should call places service with filter by type', function() {
    spyOn(placesService, 'setFilter');

    controller.selectedType = {name: 'Restaurante'};
  	controller.search();

		expect(placesService.setFilter).toHaveBeenCalledWith({type: 'Restaurante'});
  });
});
