let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");


describe('The totalPhoneBill function', function(){

    it('should return the total cost of a call' , function(){
        assert.equal(totalPhoneBill('call'), 'R2.75');
  
    });
  it('should return the total cost of a sms' , function(){
    assert.equal(totalPhoneBill('sms'), 'R0.65');
  });
});