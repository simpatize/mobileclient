'use strict';

angular
	.module('app.places')
	.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
	$stateProvider
    .state('places', {
      url: '/places',
      templateUrl: 'js/places/places.html',
      controller: 'PlacesController',
      controllerAs: 'placesCtrl'
    })
}