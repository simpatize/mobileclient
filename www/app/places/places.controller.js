'use strict';

angular
	.module('app.places')
	.controller('PlacesController', PlacesController);

function PlacesController(dataservice, searchFilterService) {
  var vm = this;
  vm.places = [];

  activate();

  function activate() {
    var currentFilter = searchFilterService.getFilter();

    return dataservice.getPlaces(currentFilter).then(function(data) {
      vm.places = data;
      return vm.places;
    });
  }
}
