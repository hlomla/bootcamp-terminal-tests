let assert = require("assert");
let findItemsOver = require("../findItemsOver");


describe('The findItemsOver function', function(){
    it('should return all the items that are over 10', function(){
        var itemsList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ];
        assert.deepEqual(findItemsOver(itemsList, 10),
       [{name : 'pears', qty : 37},
       {name : 'bananas', qty : 27}]
        );
    })
    it('should return the items that are over than 20',  function(){
        var itemsList2 = [
            {name : 'apples', qty : 9},
            {name : 'pears', qty : 10},
            {name : 'bananas', qty : 17},
            {name : 'grapes', qty : 64},
            {name : 'paw-paws', qty : 7},
            {name : 'cherry', qty : 19},
            {name : 'watermelons', qty : 22}
            
        ];
        assert.deepEqual(findItemsOver(itemsList2, 20),
        [{name : 'grapes', qty : 64},
        {name : 'watermelons', qty : 22}
        ]
         );
    })
});