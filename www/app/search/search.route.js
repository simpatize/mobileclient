'use strict';

angular
	.module('app.search')
	.config(config);

function config($stateProvider) {
	$stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'app/search/search.html',
      controller: 'SearchController',
      controllerAs: 'searchCtrl'
    });
}