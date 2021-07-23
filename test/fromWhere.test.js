let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('The fromWhere function', function(){

    it('should return the number of all the registration numbers from Cape Town' , function(){
        assert.equal(fromWhere('CA 12345, CA 75698'), 'Cape Town');
  
    });
    it('should return the number of all the registration numbers from Paarl' , function(){
        assert.equal(fromWhere('CJ 58642'), 'Paarl');
  
    });
    it('should return the number of all the registration numbers from Bellville' , function(){
        assert.equal(fromWhere('CY 10002'), 'Bellville');
  
    });
    it('should return the number of all the registration numbers from any another place' , function(){
        assert.equal(fromWhere('CL 45369'), 'Some other place!');
  
  }); 
});