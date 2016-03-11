'use strict';

angular
	.module('app.shared')
	.factory('dataservice', dataservice);

function dataservice($http) {
  var service = {
    getPlaces: getPlaces,
    getTypes: getTypes
  };

  return service;

  function getPlaces(filter) {
    filter = !!filter && !!filter.type && filter.type === '' ? undefined : filter;

    return $http({
      method: 'GET',
      url: 'http://localhost:8080/places',
      params: filter,
    })
    .then(getPlacesComplete);

    function getPlacesComplete(response) {
      return response.data;
    }
  };

  function getTypes() {
    return $http.get('data/types.json')
      .then(getTypesComplete);

    function getTypesComplete(response) {
      return response.data;
    }
  };
}
