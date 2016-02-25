'use strict';

describe('Controller: HeadctrCtrl', function () {

  // load the controller's module
  beforeEach(module('generatorYeomanApp'));

  var HeadctrCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadctrCtrl = $controller('HeadctrCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
