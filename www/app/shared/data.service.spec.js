describe('Dataservice', function() {

	var service, httpBackend;
  var expectedResponse;

  beforeEach(module('app.shared'));

	beforeEach(inject(function($httpBackend, dataService) {
		httpBackend = $httpBackend;
		service = dataService;

    expectedResponse = {data: [{name: 'Buongustaio'}]};
	}));

  it('should be registered', function() {
    expect(service).not.toEqual(null);
  });

  describe('getPlaces()', function () {
    var envService;

    beforeEach(inject(function(_envService_) {
      envService = _envService_;

      sinon.stub(envService, 'read', function(key) {
        return 'http://myBaseBackendUrl';
      });
    }));

    it('should return all places when invoked without filter argument', function() {
      httpBackend.expectGET('http://myBaseBackendUrl/places/')
        .respond(expectedResponse);

      service.getPlaces().then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');

        expect(data).toEqual(expectedResponse.data);
      });

      httpBackend.flush();
    });

    it('should return all places when filter is an empty object', function() {
      httpBackend.expectGET('http://myBaseBackendUrl/places/')
        .respond(expectedResponse);

      service.getPlaces().then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');
        expect(data).toEqual(expectedResponse.data);
      });

      httpBackend.flush();
    });

    it('should return all places when filter type key exists but is an empty string', function() {
      var filter = {searchTerm: ''}

      httpBackend.expectGET('http://myBaseBackendUrl/places/?searchTerm=')
        .respond(expectedResponse);

      service.getPlaces(filter).then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');
        expect(data).toEqual(expectedResponse.data);
      });

      httpBackend.flush();
    })

    it('should fetch places by type from webservice', function() {
      var filter = {searchTerm: 'restaurante'}

      httpBackend.expectGET('http://myBaseBackendUrl/places/?searchTerm=restaurante')
        .respond(expectedResponse);

      service.getPlaces(filter).then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');
        expect(data).toEqual(expectedResponse.data);
      });

      httpBackend.flush();
    });
  });
});
