let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('The countAllPaarl function', function(){

    it('should return the number of all the registration numbers from Paarl' , function(){
        assert.equal(countAllPaarl('CJ 812328, CJ 182736,CJ 523519,'),3);
    });
    it('return number of registration numbers from Paarl in string', function(){
        assert.equal(countAllPaarl('CJ 1234, CY 56248, CY 56328, CY 145218, CJ 45682'), 2)
    })
});