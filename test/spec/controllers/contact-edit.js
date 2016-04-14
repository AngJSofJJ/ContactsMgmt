'use strict';

describe('Controller: ContactEditCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsMgmtApp'));

  var ContactEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactEditCtrl = $controller('ContactEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactEditCtrl.awesomeThings.length).toBe(3);
  });
});
