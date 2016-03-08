'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController(placesService) {
  var vm = this;

  vm.search = search;
  vm.selectedType = {};
  vm.types = [];

  activate();

  function activate() {
    return placesService.getTypes().then(function(data) {
      vm.types = data;
      return vm.types;
    });
  };

  function search() {
    placesService.setFilter({type: vm.selectedType.value});
  };
}
