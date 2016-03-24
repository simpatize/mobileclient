'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController(dataService) {
  var vm = this;

  vm.search = search;
  vm.searchTerm = '';
  vm.searchResults = [];

  function search() {
    var res = dataService.getPlaces(vm.searchTerm);

    res.then(function(data) {
      vm.searchResults = data;
    });
  };
}
