'use strict';

/**
 * @ngdoc function
 * @name contactsMgmtApp.controller:ContactsShowCtrl
 * @description
 * # ContactsShowCtrl
 * Controller of the contactsMgmtApp
 */
angular.module('contactsMgmtApp')
  .controller('ContactsShowCtrl', ['$routeParams','contactsService', function ($routeParams, contactsService) {
      var controller = this;

      //Initialize contacts field
      controller.contacts = [];
      controller.message = '';

      //The service returns the list of records
      controller.contacts = contactsService.allContacts;



      //var contact = $routeParams.contacts;

    //Removing selected Contact
    controller.removeContact = function(contact){
      controller.message = "";
      controller.contacts.$remove(contact);

      controller.message = "Contact Deleted Successfully";

    }


    controller.showEditForm = function(contact){
      controller.message = "";
      controller.editFormShow = true;

      controller.id = contact.$id;
      controller.name = contact.name;
      controller.company = contact.company;
      controller.email = contact.email;
      controller.mobile_phone = contact.phones[0].mobile;
      controller.home_phone = contact.phones[0].home;
      controller.work_phone = contact.phones[0].work;
      controller.street_address = contact.address[0].street_address;
      controller.city = contact.address[0].city;
      controller.state = contact.address[0].state;
      controller.zipcode = contact.address[0].zipcode;
    };
  }]);
