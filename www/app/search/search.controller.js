'use strict';

angular
	.module('app.search')
	.controller('SearchController', SearchController);

function SearchController($ionicLoading, $ionicPopup, dataService) {
  var vm = this;

  vm.search = search;
  vm.searchTerm = '';
  vm.searchResults = [];

  function search() {
    if(vm.searchTerm.length > 0) {
      $ionicLoading.show();
      var res = dataService.getPlaces(vm.searchTerm);

      res.then(function(data) {
        vm.searchResults = data;
        $ionicLoading.hide();
      }, function(reason) {
        var alertPopup = $ionicPopup.alert({
          title: 'Failed to load places!',
          template: reason
        });
      });

      $ionicLoading.hide();
    }
  };
}
