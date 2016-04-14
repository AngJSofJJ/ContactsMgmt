'use strict';

describe('Service: contactsService', function () {

  // load the service's module
  beforeEach(module('contactsMgmtApp'));
  //beforeEach(angular.mock.module('contactsMgmtApp'));

  console.log('before each of calling the app name');
  // instantiate service
  var contactsService;
  beforeEach(inject(function (_contactsService_) {
    contactsService = _contactsService_;
  }));
  /*beforeEach(angular.mock.inject(function($rootScope, $controller, contactsService){
    mock = {
      $scope : $rootScope.$new(),
      contactsService : contactsService
    };
    $controller('ContactsShowCtrl', mock);
    console.log('inside the 2nd beforeeach of mocking the service');
  }));*/

  it('should call contacts service method', function () {
    //expect(!!contactsService).toBe(true);
    spyOn(mock.contactsService, "allContacts").and.returnValue({name:'jayanthi'});
    console.log('spying on allcontacts');
    expect(contactsService.allContacts).toHaveBeenCalled();
  });

});
