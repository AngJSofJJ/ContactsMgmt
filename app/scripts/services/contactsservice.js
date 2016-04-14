'use strict';

/**
 * @ngdoc service
 * @name contactsMgmtApp.contactsService
 * @description
 * # contactsService
 * Service in the contactsMgmtApp.
 */
  angular.module('contactsMgmtApp')
  .service('contactsService', ['$firebaseArray', function ($firebaseArray) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //Initialize firebase
    var ref = new Firebase('https://contactsofj-app.firebaseIO.com/contacts');
    var contacts = $firebaseArray(ref);

    return {
        allContacts : contacts,

        createContact : function() {
          contacts.$add({
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
          });

        },
        getContactDetail : function(contactId){
            var contact = contacts.$getRecord(contactId);
            return contact;
        },
        removeContact : function(contact){
            return contacts.$remove(contact);
        }

    };

  }]);
