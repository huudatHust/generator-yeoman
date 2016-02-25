'use strict';

/**
 * @ngdoc directive
 * @name generatorYeomanApp.directive:inputt
 * @description
 * # inputt
 */
angular.module('generatorYeomanApp')
  .directive('inputt', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the inputt directive');
      }
    };
  });
