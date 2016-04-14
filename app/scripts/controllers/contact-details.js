'use strict';

/**
 * @ngdoc function
 * @name contactsMgmtApp.controller:ContactDetailsCtrl
 * @description
 * # ContactDetailsCtrl
 * Controller of the contactsMgmtApp
 */
angular.module('contactsMgmtApp')
  .controller('ContactDetailsCtrl', ['contactsService', '$routeParams', function (contactsService, $routeParams) {

    var controller = this;
      //Details of the Clicked Contact Name

    var id = $routeParams.id;

    //Get record for the selected contact Id
    var contact = contactsService.getContactDetail(id);

    controller.contactShow = true;

    controller.name = contact.name;
    controller.firs_name = contact.first_name;
    controller.last_name = contact.last_name;
    controller.company = contact.company;
    controller.email = contact.email;
    controller.mobile_phone = contact.phones[0].mobile;
    controller.home_phone = contact.phones[0].home;
    controller.work_phone = contact.phones[0].work;
    controller.street_address = contact.address[0].street_address;
    controller.city = contact.address[0].city;
    controller.state = contact.address[0].state;
    controller.zipcode = contact.address[0].zipcode;

  }]);
