'use strict';

/**
 * @ngdoc overview
 * @name geekAngularApp
 * @description
 * # geekAngularApp
 *
 * Main module of the application.
 */
angular
  .module('geekAngularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
