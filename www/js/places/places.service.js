'use strict';

angular
	.module('app.places')
	.factory('PlacesService', PlacesService);

function PlacesService($resource) {
	return $resource(
		'/places',
		{},
		{query: {method:'GET', isArray:true}}
	);
}