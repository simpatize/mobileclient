angular
  .module('app.searchfilter')
  .factory('searchfilterService', function() {
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
  })