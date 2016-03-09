describe('Dataservice', function() {

	var service, httpBackend;

  beforeEach(module('app.shared'));

	beforeEach(inject(function($httpBackend, dataservice) {
		httpBackend = $httpBackend;
		service = dataservice;
	}));

  it('should be registered', function() {
    expect(service).not.toEqual(null);
  });

  it('should load default types of places', function() {
    httpBackend.expectGET('data/types.json')
      .respond([
        { name: 'Restaurante', value: 'restaurante' },
        { name: 'Bar', value: 'bar' }
      ]);

    service.getTypes().then(function(data) {
      expect(data.length).toEqual(2);
      expect(data[1].name).toEqual('Bar');
      expect(data[1].value).toEqual('bar');
    });

    httpBackend.flush();
  });

  it('should fetch places by type from webservice', function() {
    httpBackend.expectGET('http://localhost:8000/places?type=restaurante')
      .respond([{name: 'Buongustaio'}]);

    service.filter = {type: 'restaurante'};

    service.getPlaces().then(function(data) {
      expect(data.length).toEqual(1);
      expect(data[0].name).toEqual('Buongustaio');
    });

    httpBackend.flush();
  });

	it('should update filter', function() {
    service.filter = {};

    service.setFilter({type: 'restaurante'});

		expect(service.filter).toEqual({type: 'restaurante'});
	});
});
