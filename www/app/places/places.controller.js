'use strict';

angular
	.module('app.places')
	.controller('PlacesController', PlacesController);

function PlacesController(placesService) {
  var vm = this;
  vm.places = [];

  activate();

  function activate() {
    return placesService.getPlaces().then(function(data) {
        vm.places = data;
        return vm.places;
      });
  }
}
