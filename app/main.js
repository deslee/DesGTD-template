console.log("main js file");

require('angular');
require('angular-route');

angular.module('app', ['ngRoute']).config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'assets/home.html',
      controller: function() {
      }
    })
    .when('/inlist', {
      templateUrl: 'assets/inlist.html',
      controller: function() {
      }
    })
    .otherwise({redirectTo: '/'});
}).run(function() {
  console.log('run');
});
