let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('The countRegNumber function', function(){

    it('should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 12345 , CA 54321 , CA 67890 ,CA 09876'), 4);
    });
    it('should return the length of registration numbers from CJ', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328,CA 182736,CY 523519,CJ 812328'), 6);
    })
});