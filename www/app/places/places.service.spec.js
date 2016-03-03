'use strict';

describe('Places service', function() {

	var service, mockBackend;

  beforeEach(module('app.places'));

	beforeEach(inject(function($httpBackend, PlacesService) {
		mockBackend = $httpBackend;
		mockBackend.expectGET('/places?type=Restaurante')
			.respond([{name: 'Buongustaio'}]);

		service = PlacesService;
	}));

  it('should be created successfully', function() {
    expect(service).toBeDefined;
  });

  it('should fetch places by type from webservice and update the PlacesService', function() {
    service.updatePlacesByType({name: 'Restaurante'});

    mockBackend.flush();

    expect(service.places.length).toEqual(1);
    expect(service.places[0].name).toEqual('Buongustaio');
  });

	it('should get updated list of places', function() {
    service.places = [
      {name: 'Buongustaio'},
      {name: 'Sugoi'}
    ];

    var places = service.getPlaces();

		expect(places.length).toEqual(2);
		expect(places).toEqual(service.places);
	});
});
