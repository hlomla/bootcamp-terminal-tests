let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");


describe('The findItemsOver20 function', function(){
    it('should return all the items that are over 20', function(){
        var itemsList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ];
        assert.deepEqual(findItemsOver20(itemsList),
       [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27}]
        );
    })
    it('should return the highest item quantity',  function(){
        var itemsList2 = [
            {name : 'apples', qty : 19},
            {name : 'pears', qty : 17},
            {name : 'bananas', qty : 2000},
            {name : 'grapes', qty : 14},
            {name : 'paw-paws', qty : 7},
            {name : 'cherry', qty : 9},
            {name : 'watermelons', qty : 2}
            
        ];
        assert.deepEqual(findItemsOver20(itemsList2),
        [{name : 'bananas', qty : 2000}

        ]
         );
    })
});