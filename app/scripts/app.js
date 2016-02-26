'use strict';

/**
 * @ngdoc overview
 * @name generatorYeomanApp
 * @description
 * # generatorYeomanApp
 *
 * Main module of the application.
 */

var app =  angular
  .module('generatorYeomanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/main.html',
             controller : 'MainCtrl',
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
              url : '/about',
              templateUrl : 'views/about.html'
        })

        //about template =====================================================
        .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: 'views/tpl/app.html'
        })
       .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'views/tpl/dashboard.html',
        })
       .state('app.blank', {
            url : '/blank',
            templateUrl : 'views/tpl/blank.html'
       })
       .state('app.buttons', {
            url : '/buttons',
            templateUrl : 'views/tpl/buttons.html'
       })
       .state('app.flot', {
            url : '/flot',
            templateUrl : 'views/tpl/flot.html'
       })
       .state('app.forms', {
            url : '/forms',
            templateUrl : 'views/tpl/forms.html'
       })
       .state('app.grid', {
            url : '/grid',
            templateUrl : 'views/tpl/grid.html'
       })
       .state('app.icons', {
            url : '/icons',
            templateUrl : 'views/tpl/icons.html'
       })
       .state('app.morris', {
            url : '/morris',
            templateUrl : 'views/tpl/morris.html'
       })
       .state('app.notifications', {
            url : '/notifications',
            templateUrl : 'views/tpl/notifications.html'
       })
       .state('app.panel', {
            url : '/panel',
            templateUrl : 'views/tpl/panels-wells.html'
       })
       .state('app.table', {
            url : '/table',
            templateUrl : 'views/tpl/tables.html'
       })
       .state('app.typography', {
            url : '/typography',
            templateUrl : 'views/tpl/typography.html'
       })
       .state('loginTpl', {
          url : '/app/login',
          templateUrl : '/views/tpl/login.html'
       });
        
});