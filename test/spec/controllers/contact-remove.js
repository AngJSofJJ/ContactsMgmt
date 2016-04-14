'use strict';

describe('Controller: ContactRemoveCtrl', function () {

  // load the controller's module
  beforeEach(module('contactsMgmtApp'));

  var ContactRemoveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactRemoveCtrl = $controller('ContactRemoveCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContactRemoveCtrl.awesomeThings.length).toBe(3);
  });
});
