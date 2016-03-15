'use strict';

angular
	.module('app.shared')
	.factory('dataService', dataService);

function dataService($http, envService) {
  var service = {
    getPlaces: getPlaces,
    getTypes: getTypes
  };

  return service;

  function getPlaces(filter) {
    filter = !!filter && !!filter.type && filter.type === '' ? undefined : filter;

    return $http({
      method: 'GET',
      url: envService.read('baseBackendUrl') + '/places/',
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
