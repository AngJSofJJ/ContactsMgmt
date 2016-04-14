// An example configuration file.
exports.config = {

  //directConnect: true,

  seleniumAddress:'http://localhost:4444/wd/hub',

  //baseUrl : 'http://localhost:9000/',

  onPrepare : function(){
    var disableNgAnimate = function(){
      angular.module('disableNgAnimate',[]).run(function($animate){
        $animate.enabled(false);
      });
    };

    browser.addMockModule('disableNgAnimate', disableNgAnimate);
  },

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['./spec/homepage/homepage_spec.js'],

  specs: ['./spec/controllers/contacts.js'],
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors:true,
    defaultTimeoutInterval: 30000
  }
};
