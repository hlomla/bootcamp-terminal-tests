let assert = require("assert");
let regCheck = require("../regCheck");


describe('The regCheck function', function(){

    it('should return true if registration number ends with GP', function(){
        assert.equal (regCheck('DC 55 YU GP', 'GP'),true);
    });
    it('should return false if registration number does not end with EC', function(){
        assert.equal (regCheck('DC 55 YU GP', 'EC'), false);
    });
});