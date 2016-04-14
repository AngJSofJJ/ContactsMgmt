(function(){
  'use strict';

  var isLoggedIn = false;
/**
 * @ngdoc overview
 * @name contactsMgmtApp
 * @description
 * # contactsMgmtApp
 *
 * Main module of the application.
 */
angular
  .module('contactsMgmtApp', ['ngRoute','firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts-show.html',
        controller: 'ContactsShowCtrl',
        controllerAs: 'contactsShow'
      })
      .when('/contacts/:id', {
        templateUrl: 'views/contact-details.html',
        controller: 'ContactDetailsCtrl',
        controllerAs: 'contactDetail'
      })
      .when('/contact/add', {
        templateUrl: 'views/contact-create.html',
        controller: 'ContactCreateCtrl',
        controllerAs: 'contactCreate'
      })
      .when('/contact/edit/:id', {
        templateUrl: 'views/contact-edit.html',
        controller: 'ContactEditCtrl',
        controllerAs: 'contactEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
}());
