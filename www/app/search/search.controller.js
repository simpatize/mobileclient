'use strict';

angular
	.module('app.search', ['ionic'])
	.controller('SearchController', SearchController);

function SearchController($ionicLoading, $ionicPopup, dataService) {
  var vm = this;

  vm.search = search;
  vm.searchTerm = '';
  vm.searchResults = [];

  function search() {
    if(vm.searchTerm.length > 0) {
      $ionicLoading.show();
      dataService.getPlaces({keyword: vm.searchTerm}).then(onSuccess, onError);
    }

    function onSuccess(data) {
      vm.searchResults = data;
      $ionicLoading.hide();
    }

    function onError(status) {
      var msg = status !== null ?
        'Failed to perform a search - server returned HTTP status ' + status:
        'Could not perform a search - check your connectivity.';

      var alertPopup = $ionicPopup.alert({
        title: 'Failed to load places!',
        template: msg
      });
      $ionicLoading.hide();
    }
  };
}
