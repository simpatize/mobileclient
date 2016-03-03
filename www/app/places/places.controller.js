'use strict';

angular
	.module('app.places')
	.controller('PlacesController', PlacesController);

function PlacesController(PlacesService) {
  var vm = this;
  vm.places = [];

  activate();

  function activate() {
    vm.places = PlacesService.getPlaces();
  }
}
