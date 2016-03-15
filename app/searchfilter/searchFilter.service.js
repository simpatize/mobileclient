'use strict';

angular
  .module('app.searchFilter')
  .factory('searchFilterService', searchFilterService);

function searchFilterService() {
  var filter = {};

  var service = {
    getFilter: getFilter,
    setFilter: setFilter,
  };

  return service;

  function setFilter(updatedFilter) {
    filter = updatedFilter;
  }

  function getFilter() {
    return filter;
  }
}
