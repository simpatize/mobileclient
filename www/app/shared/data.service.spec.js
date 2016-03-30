describe('Dataservice', function() {

	var service, httpBackend;
  var expectedResponse;

  beforeEach(module('app.shared'));

	beforeEach(inject(function($httpBackend, dataService) {
		httpBackend = $httpBackend;
		service = dataService;

    expectedResponse = [{name: 'Buongustaio'}];
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
      httpBackend.expectGET('http://myBaseBackendUrl/v1/places')
        .respond(expectedResponse);

      service.getPlaces().then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');

        expect(data).toEqual(expectedResponse);
      });

      httpBackend.flush();
    });

    it('should return all places when filter is an empty object', function() {
      httpBackend.expectGET('http://myBaseBackendUrl/v1/places')
        .respond(expectedResponse);

      service.getPlaces().then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');
        expect(data).toEqual(expectedResponse);
      });

      httpBackend.flush();
    });

    it('should return all places when filter type key exists but is an empty string', function() {
      var filter = {keyword: ''}

      httpBackend.expectGET('http://myBaseBackendUrl/v1/places?keyword=')
        .respond(expectedResponse);

      service.getPlaces(filter).then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');
        expect(data).toEqual(expectedResponse);
      });

      httpBackend.flush();
    })

    it('should fetch places by type from webservice', function() {
      var filter = {keyword: 'restaurante'}

      httpBackend.expectGET('http://myBaseBackendUrl/v1/places?keyword=restaurante')
        .respond(expectedResponse);

      service.getPlaces(filter).then(function(data) {
        expect(envService.read.firstCall.args[0])
          .toEqual('baseBackendUrl');
        expect(data).toEqual(expectedResponse);
      });

      httpBackend.flush();
    });
  });
});
