'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController(PlacesService) {
  var vm = this;

  vm.selectedType = {};

  vm.types = [
    {name: 'Restaurante'},
    {name: 'Bar'},
    {name: 'Casa noturna'}
  ];

  vm.search = function() {
    PlacesService.setFilter({type: vm.selectedType.name});
  };
}
