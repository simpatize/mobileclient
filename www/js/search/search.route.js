'use strict';

angular
	.module('app.search')
	.config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {
	$stateProvider
    .state('search', {
      url: '/search',
      templateUrl: 'js/search/search.html',
      controller: 'SearchController',
      controllerAs: 'searchCtrl'
    });
}