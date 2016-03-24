'use strict';

angular
	.module('app.shared')
	.factory('dataService', dataService);

function dataService($http, $q, envService) {
  var service = {
    getPlaces: getPlaces
  };

  return service;

  function getPlaces(filter) {
    // var placesPromise = $q.defer();
    //
    // setTimeout(function() {
    //   placesPromise.resolve([
    //       {name: 'Bar Jurubeba', thumbnailUrl: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg"},
    //       {name: 'Restaurante Jurubeba', thumbnailUrl: "http://esq.h-cdn.co/assets/cm/15/06/54d3cdbba4f40_-_esq-01-bar-lgn.jpg"},
    //     ]
    //   );
    // }, 2000);
    //
    // return placesPromise.promise;
    filter = !!filter && !!filter.type && filter.searchTerm === '' ? undefined : filter;

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
}
