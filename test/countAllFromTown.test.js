let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");


describe('The countAllFromTown function', function(){

    it('should return the number of all the registration numbers from any town' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ' ), 1)
      });
      it('should return number of registration numbers from Cape Town', function(){
        assert.equal(countAllFromTown('CA 12345, CJ 4587, CY 58461, CA 475182, CA 459613', 'CA'), 3)
      })
});