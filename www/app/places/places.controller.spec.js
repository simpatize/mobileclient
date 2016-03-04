'use strict';

describe('Places controller', function () {

  var controller;

  beforeEach(module('app.places'));

  beforeEach(inject(function($controller, $q, $rootScope, PlacesService) {
    sinon.stub(PlacesService, 'getPlaces', function() {
      var deferred = $q.defer();
      deferred.resolve([
        {name: 'Sushimi'},
        {name: 'Sugoi'},
        {name: 'Wadamon'}
      ]);
      return deferred.promise;
    });

    controller = $controller('PlacesController', PlacesService);
    $rootScope.$apply();
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined;
  });

  describe('after activate', function() {
    it('should get the list of places from places service', function() {
      expect(controller.places.length).toEqual(3);
    });
  });
});
