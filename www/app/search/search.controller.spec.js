'use strict';

describe('Search controller', function() {

  var controller, placesService;

  beforeEach(module('app.places'));
  beforeEach(module('app.search'));

	beforeEach(inject(function($controller, PlacesService) {
    placesService = PlacesService;
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

  it('should update PlacesService with selected type of place as parameter', function() {
    spyOn(placesService, 'updatePlacesByType');

    controller.selectedType = {name: 'Restaurante'};
  	controller.search();

		expect(placesService.updatePlacesByType).toHaveBeenCalledWith({name: 'Restaurante'});
  });
});
