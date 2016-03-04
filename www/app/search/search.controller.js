'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController(placesService) {
  var vm = this;

  vm.selectedType = {};

  vm.types = [
    {name: 'Restaurante'},
    {name: 'Bar'},
    {name: 'Casa noturna'}
  ];

  vm.search = function() {
    placesService.setFilter({type: vm.selectedType.name});
  };
}
