'use strict';

/**
 * @ngdoc function
 * @name contactsMgmtApp.controller:ContactCreateCtrl
 * @description
 * # ContactCreateCtrl
 * Controller of the contactsMgmtApp
 */
angular.module('contactsMgmtApp')
  .controller('ContactCreateCtrl', ['contactsService', function (contactsService) {

      var controller = this;

      controller.addFormSubmit = function(){

      controller.contacts = contactsService.allContacts;

      controller.message = "";

      // Grab all entered values from scope
      if(controller.name){var name = controller.name;}else {var name = null;}
      if(controller.company){var company = controller.company;}else {var company = null;}
      if(controller.email){var email = controller.email;}else {var email = null;}
      if(controller.mobile_phone){var mobile_phone = controller.mobile_phone;}else {var mobile_phone = null;}
      if(controller.home_phone){var home_phone = controller.home_phone;}else {var home_phone = null;}
      if(controller.work_phone){var work_phone = controller.work_phone;}else {var work_phone = null;}
      if(controller.street_address){var street_address = controller.street_address;}else {var street_address = null;}
      if(controller.city){var city = controller.city;}else {var city = null;}
      if(controller.state){var state = controller.state;}else {var state = null;}
      if(controller.zipcode){var zipcode = controller.zipcode;}else {var zipcode = null;}

      // Build the object in JSON Format
      controller.contacts.$add({
        name : name,
        email : email,
        company : company,
        phones :[{
          mobile : mobile_phone,
          home : home_phone,
          work : work_phone
        }],
        address : [{
          street_address : street_address,
          city : city,
          state : state,
          zipcode : zipcode
        }]
      }).then(function(ref){
        var id = ref.key();
        console.log("Added New Contact with ID = " + id);

        //Clear All the Add Form Fields
        clearFields();

        //Send Message to HTML UI
        controller.message = "New Contact With ID = " + id + " Added Successfully";

      });
    } // End of Adding Contact

    //Function to clear all the fields
    function clearFields(){
      controller.name = "";
      controller.company = "";
      controller.email = "";
      controller.mobile_phone = "";
      controller.home_phone = "";
      controller.work_phone = "";
      controller.street_address = "";
      controller.city = "";
      controller.state = "";
      controller.zipcode = "";
    }
  }]);
