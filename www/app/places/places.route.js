'use strict';

angular
	.module('app.places')
	.config(config);

function config($stateProvider) {
	$stateProvider
    .state('places', {
      url: '/places',
      templateUrl: 'app/places/places.html',
      controller: 'PlacesController',
      controllerAs: 'placesCtrl'
    })
}
