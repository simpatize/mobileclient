'use strict';

angular
	.module('app.places')
	.controller('PlacesController', PlacesController);

function PlacesController(dataservice) {
  var vm = this;
  vm.places = [];

  activate();

  function activate() {
    return dataservice.getPlaces().then(function(data) {
      vm.places = data;
      return vm.places;
    });
  }
}
