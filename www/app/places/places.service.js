'use strict';

angular
	.module('app.places')
	.factory('placesService', placesService);

function placesService($http) {
  var filter = {};

  var service = {
    filter: filter,
    getPlaces: getPlaces,
    setFilter: setFilter,
    getTypes: getTypes
  };

  return service;

  function getPlaces() {
    return $http({
      method: 'GET',
      url: 'http://localhost:8000/places',
      params: this.filter
    })
    .then(getPlacesComplete);

    function getPlacesComplete(response) {
      return response.data;
    }
  };

  function setFilter(filter) {
    this.filter = filter;
  };

  function getTypes() {
    return $http.get('data/types.json')
      .then(getTypesComplete);

    function getTypesComplete(response) {
      return response.data;
    }
  };
}
