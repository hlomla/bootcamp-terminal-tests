let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Hlomla correctly', function(){
        assert.equal('Hello, Hlomla', greet('Hlomla'));
    });
    it('should greet Okuhle correctly', function(){
        assert.equal('Hello, Okuhle', greet('Okuhle'));
    });
});