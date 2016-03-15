'use strict';

angular
  .module('app.config', ['environment'])
  .config(function(envServiceProvider) {
     envServiceProvider.config({
       domains: {
         development: ['localhost'],
         qa: ['simpatize-mobile-qa.herokuapp.com'],
         staging: ['simpatize-mobile-staging.herokuapp.com']
       },
       vars: {
         development: {
           baseBackendUrl: 'http://localhost:8080',
         },
         qa: {
           baseBackendUrl: 'https://simpatize-webservice-qa.herokuapp.com',
         },
         staging: {
           baseBackendUrl: 'https://simpatize-webservice-staging.herokuapp.com',
         }
       }
     });

     envServiceProvider.check();
 });
