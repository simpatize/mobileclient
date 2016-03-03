'use strict';

describe('Places controller', function () {

  var controller, service;

  beforeEach(module('app.places'));

  beforeEach(inject(function($controller, PlacesService) {
    service = PlacesService;
    service.places = [
      {name: 'Sushimi'},
      {name: 'Wadamon'},
      {name: 'Kusakabe'}
    ];

    controller = $controller('PlacesController', service);
  }));

  it('should be created successfully', function() {
    expect(controller).toBeDefined;
  });

  it('should store the list of places from Places service', function() {
    expect(controller.places).toEqual(service.places);
  });
});
