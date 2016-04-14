var homepage_po = function(){

  this.getContactsLength = function(){
    return element(by.binding('contactsShow.contacts.length')).getText();
  };

  this.enterSearchField = function(query){
    element(by.model('search')).sendKeys(query);
  }


};

module.exports = new homepage_po();
