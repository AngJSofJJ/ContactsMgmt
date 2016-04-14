'use strict';


describe('Controller: ContactsShowCtrl', function () {
  var ContactsShowCtrl,
    $scope;

  // load the controller's module
  beforeEach(module('contactsMgmtApp'));

  var ContactsShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactsShowCtrl = $controller('ContactsShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));



  it('should invoke allcontacts', function () {
    expect(ContactsShowCtrl.contacts).notEqual(0);
  });
});
