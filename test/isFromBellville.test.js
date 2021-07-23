let assert = require("assert");
let isFromBellville = require("../isFromBellville");


describe('The isFromBellville function', function(){

    it('should be true if registration number is from Bellville', function(){
        assert.equal(isFromBellville('CY123654'),true);
    });
    it('should be false if registration number is not from Bellville', function(){
        assert.equal(isFromBellville('CA145236'), false);
    });
});