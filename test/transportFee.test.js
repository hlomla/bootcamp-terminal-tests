let assert = require("assert");
let transportFee = require("../transportFee");


describe('The transportFee function', function(){
    it('should show you the transport fee for Morning Shift' , function(){
        assert.equal(transportFee('morning'), 'R20');
        
    });
    it('should show you the transport fee for Afternoon Shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
        
});
    it('should show you the transport fee for Night Shift' , function(){
    assert.equal(transportFee('night'), 'free');
    });
});