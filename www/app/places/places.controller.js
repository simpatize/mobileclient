'use strict';

angular
	.module('app.places')
	.controller('PlacesController', PlacesController);

function PlacesController(dataService, searchFilterService) {
  var vm = this;
  vm.places = [];

  activate();

  function activate() {
    var currentFilter = searchFilterService.getFilter();

    return dataService.getPlaces(currentFilter).then(function(data) {
      vm.places = data;
      return vm.places;
    });
  }
}
