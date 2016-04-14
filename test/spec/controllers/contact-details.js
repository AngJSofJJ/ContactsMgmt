'use strict';

describe('Controller: ContactDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsMgmtApp'));

  var ContactDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactDetailsCtrl = $controller('ContactDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
