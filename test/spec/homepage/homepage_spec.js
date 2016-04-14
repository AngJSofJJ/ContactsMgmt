var util = require('util');
var homepage_po = require('./homepage_po.js');
var fs = require('fs');

describe("Contacts Management System Home Page", function(){

    //Global Variables
    var contactsList;
    var previousCount;

    function writeScreenShot(data, filename){
      var stream = fs.createWriteStream(filename);
      stream.write(new Buffer(data, 'base64'));
      stream.end();
    }

    //Block that is executed before each test case(each it block)
    beforeEach(function(){
      //Open the webpage in chrome
      browser.get('http://localhost:9000/#/contacts',10000);


      //browser.waitForAngular();
      //Wait for the page to be rendered
      //browser.sleep(10000);

      //To obtain the initial count of records
      contactsList = element.all(by.repeater('contact in contactsShow.contacts'));

      contactsList.count().then(function(num){
        previousCount = num.length;
      });

      var count = element(by.name('contactsCount')).getAttribute();
      console.log('Count = ' + count);
      console.log('No of rows in Contacts = ' + contactsList.count());
      console.log('Previous Count = ' + previousCount);

      /*browser.takeScreenShot().then(function(png){
        writeScreenShot(png, 'exception.png');
      });*/
    });

  //Test Case 1 - To verify Page Title
  it('shoud verify the page title', function(){
    expect(browser.getTitle()).toEqual('Contacts Management System');
  });

  xit('Should Verify If ADD button (+) is present', function(){
      expect(element(by.linkText('+')).isPresent()).toBeTruthy();
      console.log('a link by text + is preesent');
  });



  //Test case 2 - To verify add contact
  it('Should Successfully add new contact', function(){
      element(by.linkText('+')).click();
      //element(by.css('#add')).click();
      element(by.model('contactCreate.name')).sendKeys('Jessica');
      element(by.model('contactCreate.email')).sendKeys('jessica@protrator.com');
      element(by.model('contactCreate.company')).sendKeys('Google Protractor');
      element(by.model('contactCreate.work_phone')).sendKeys('585-216-5371');
      element(by.model('contactCreate.mobile_phone')).sendKeys('585-234-9081');
      element(by.model('contactCreate.home_phone')).sendKeys('919919191');
      element(by.model('contactCreate.street_address')).sendKeys('Protractor Street');
      element(by.model('contactCreate.city')).sendKeys('New York City');
      element(by.model('contactCreate.state')).sendKeys('New York');
      element(by.model('contactCreate.zipcode')).sendKeys('45189');
      //element(by.css('#AddContact')).click();
      element(by.id('AddContact')).click();

      //To verify the row count after adding new contact
      expect(contactsList.count()).toEqual(previousCount+1);

  });

  xit('Should verify if it returns number of records', function(){

        var contactsLength = homepage_po.getContactsLength().then(function(val){
          var num = val.length;
          var isNum = !isNaN(num);
          expect(isNum).toBeTruthy();
        });
        //expect(contactsLength).toEqual('0');
    });

    it('should check if the search box is present', function(){
      expect(element(by.model('search')).isPresent()).toBeTruthy();
    });


});

