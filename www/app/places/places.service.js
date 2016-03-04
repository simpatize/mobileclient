'use strict';

angular
	.module('app.places')
	.factory('PlacesService', PlacesService);

function PlacesService($http) {
  var filter = {};

  var service = {
    filter: filter,
    setFilter: setFilter,
    getPlaces: getPlaces
  };

  return service;

  function setFilter(filter) {
    this.filter = filter;
  };

  function getPlaces() {
    return $http({
      method: 'GET',
      url: '/places',
      params: this.filter
    })
    .then(getPlacesComplete);

    function getPlacesComplete(response) {
      return response.data;
    }
  };
}
