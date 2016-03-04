'use strict';

angular
	.module('app.places')
	.controller('PlacesController', PlacesController);

function PlacesController(PlacesService) {
  var vm = this;
  vm.places = [];

  activate();

  function activate() {
    return PlacesService.getPlaces().then(function(data) {
        vm.places = data;
        return vm.places;
      });
  }
}
