describe('Places service', function() {

	var service, httpBackend;

  beforeEach(module('app.places'));

	beforeEach(inject(function($httpBackend, placesService) {
		httpBackend = $httpBackend;
		service = placesService;
	}));

  beforeEach(inject(function() {
    httpBackend.expectGET('/places?type=Restaurante')
      .respond([{name: 'Buongustaio'}]);
  }))

  it('should be registered', function() {
    expect(service).not.toEqual(null);
  });

  it('should fetch places by type from webservice', function() {
    service.filter = {type: 'Restaurante'};

    service.getPlaces().then(function(data) {
      expect(data.length).toEqual(1);
      expect(data[0].name).toEqual('Buongustaio');
    });

    httpBackend.flush();
  });

	it('should update filter', function() {
    service.filter = {};

    service.setFilter({type: 'Restaurante'});

		expect(service.filter).toEqual({type: 'Restaurante'});
	});
});
