'use strict';

describe('Controller: ContactCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsMgmtApp'));

  var ContactCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactCreateCtrl = $controller('ContactCreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactCreateCtrl.awesomeThings.length).toBe(3);
  });
});
