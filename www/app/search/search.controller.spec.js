'use strict';

describe('SearchController', function() {

  beforeEach(module('app.places'));
  beforeEach(module('app.search'));

  var searchCtrl, placesService;

	beforeEach(inject(function($controller, PlacesService) {
    placesService = PlacesService;

		searchCtrl = $controller('SearchController', PlacesService);
  }));

  it('should have a empty places list', function() {
	  expect(searchCtrl.places.length).toBe(0);
  });

  it('should call PlacesService with selected type of place as parameter', function() {
  	searchCtrl.selectedType = {name:'Restaurante'};

    spyOn(placesService, 'query');

  	searchCtrl.search();

		expect(placesService.query).toHaveBeenCalledWith({type:'Restaurante'});
  });
});
