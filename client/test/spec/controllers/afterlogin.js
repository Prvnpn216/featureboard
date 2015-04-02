'use strict';

describe('Controller: AfterloginCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var AfterloginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AfterloginCtrl = $controller('AfterloginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
