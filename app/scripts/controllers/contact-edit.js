'use strict';

/**
 * @ngdoc function
 * @name contactsMgmtApp.controller:ContactEditCtrl
 * @description
 * # ContactEditCtrl
 * Controller of the contactsMgmtApp
 */
angular.module('contactsMgmtApp')
    .controller('ContactEditCtrl', ['contactsService', '$routeParams', '$location', function (contactsService, $routeParams, $location) {

      var controller = this;
      //Details of the Clicked Contact Name

      var id = $routeParams.id;

      //Get record for the selected contact Id
      var contact = contactsService.getContactDetail(id);

      controller.message = "";

      controller.name = contact.name;
      controller.id = contact.$id;
      controller.company = contact.company;
      controller.email = contact.email;
      controller.mobile_phone = contact.phones[0].mobile;
      controller.home_phone = contact.phones[0].home;
      controller.work_phone = contact.phones[0].work;
      controller.street_address = contact.address[0].street_address;
      controller.city = contact.address[0].city;
      controller.state = contact.address[0].state;
      controller.zipcode = contact.address[0].zipcode;


      controller.editFormSubmit = function(){
        controller.message = "";
        console.log('Updating Contact ....');

        //Get Contact Id
        var id = controller.id;

        controller.contacts = contactsService.allContacts;
        //Get record for the selected contact Id
        var record = controller.contacts.$getRecord(id);

        //Assign Values
        record.name = controller.name;
        record.email = controller.email;
        record.company = controller.company;
        record.phones[0].work = controller.work_phone;
        record.phones[0].home = controller.home_phone;
        record.phones[0].mobile = controller.mobile_phone;
        record.address[0].street_address = controller.street_address;
        record.address[0].city = controller.city;
        record.address[0].state = controller.state;
        record.address[0].zipcode = controller.zipcode;

        //Update the Contact
        controller.contacts.$save(record).then(function(ref){
          console.log(ref.key);
        })

        $location.path('/contacts');

        controller.message = "Contact Updated Successfully";
      }; //End of Updation


  }]);
