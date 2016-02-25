'use strict';

/**
 * @ngdoc overview
 * @name generatorYeomanApp
 * @description
 * # generatorYeomanApp
 *
 * Main module of the application.
 */

angular
  .module('generatorYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/about');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
              url : '/about',
              templateUrl : 'views/about.html'
        });
        
});