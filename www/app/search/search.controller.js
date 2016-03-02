'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController(PlacesService) {
  this.selectedType = {};
  this.places = [];

  var self = this;

  this.search = function () {
    self.places = PlacesService.query({type: self.selectedType.name});
  };
}
