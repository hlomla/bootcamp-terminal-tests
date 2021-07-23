let assert = require("assert");
let yearsAgo = require("../yearsAgo");


describe('The yearsAgo function', function(){

    it('should return how many years it is from the current year we in' , function(){
        assert.equal(yearsAgo(1976), 45);
    });
     it('should return how the difference from year 2000 till current year', function(){
         assert.equal(yearsAgo(2000),21);
     })
});