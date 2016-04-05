'use strict';

angular
	.module('app.shared')
	.factory('dataService', dataService);

function dataService($http, $q, backendUrl) {
  var service = {
    getPlaces: getPlaces
  };

  return service;

  function getPlaces(filter) {
    var placesPromise = $q.defer();

    filter = !!filter && !!filter.type && filter.searchTerm === '' ? undefined : filter;
    $http({
      method: 'GET',
      url: backendUrl + '/v1/places',
      params: filter,
    })
    .success(getPlacesComplete)
    .error(propagateErrorReason);

    return placesPromise.promise;

    function getPlacesComplete(response) {
      placesPromise.resolve(response);
    }

    function propagateErrorReason(reason) {
      if(reason === null) {
        placesPromise.reject(reason);
      } else {
        placesPromise.reject(reason.status);
      }
    }
  };
}
