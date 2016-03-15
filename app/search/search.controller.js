'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController(dataService, searchFilterService) {
  var vm = this;

  vm.search = search;
  vm.selectedType = {};
  vm.types = [];

  activate();

  function activate() {
    return dataService.getTypes().then(function(data) {
      vm.types = data;
      return vm.types;
    });
  };

  function search() {
    searchFilterService.setFilter({type: vm.selectedType.value});
  };
}
