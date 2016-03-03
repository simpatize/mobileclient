'use strict';

angular
	.module('app.places')
	.factory('PlacesService', PlacesService);

function PlacesService($resource) {
  var places = [];

  var service = {
    places: places,
    updatePlacesByType: updatePlacesByType,
    getPlaces: getPlaces
  };

  return service;

  function updatePlacesByType(type) {
    this.places = $resource(
      '/places',
      {type: type.name},
      {query: {method:'GET', isArray:true}}
    ).query();
  };

  function getPlaces() {
    return this.places;
  };
}
