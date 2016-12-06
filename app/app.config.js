'use strict';

angular.
  module('metisekoReportApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: 'index.html'
        }).
        otherwise('/report');
    }
  ]);
