'use strict';

/**
 * @ngdoc function
 * @name contactsMgmtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the contactsMgmtApp
 */
angular.module('contactsMgmtApp')
  .controller('LoginCtrl', ['$rootScope', '$location', function ($rootScope, $location) {


      var controller = this;
      controller.email  = "";
      controller.password = "";


      controller.validate = function(){
        var email = controller.email;
        var password = controller.password;
        if(email === 'admin@contacts.com' && password === 'abc'){
          controller.isLoggedIn = true;
          $location.path('/contacts');
        }
        else{
          controller.isLoggedIn = false;
        }
      };


  }]);
