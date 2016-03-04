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

  it('should be registered', function() {
    expect(service).not.toEqual(null);
  });

  it('should fetch places by type from webservice', function() {
    service.filter = {type: 'Restaurante'};

    service.getPlaces().then(function(data) {
      expect(data.length).toEqual(1);
      expect(data[0].name).toEqual('Buongustaio');
    });

    mockBackend.flush();
  });

	it('should update filter', function() {
    service.filter = {};

    service.setFilter({type: 'Restaurante'});

		expect(service.filter).toEqual({type: 'Restaurante'});
	});
});
