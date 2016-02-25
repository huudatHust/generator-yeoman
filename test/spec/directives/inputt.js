'use strict';

describe('Directive: inputt', function () {

  // load the directive's module
  beforeEach(module('generatorYeomanApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<inputt></inputt>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inputt directive');
  }));
});
