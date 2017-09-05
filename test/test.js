let sort=require('../sort');
let assert=require('assert');

describe("Buble",function(){
    it("should sort ", function(){
        assert.deepEqual([1,2,3,4,5,6],sort.bubble([5,1,6,2,4,3]))
    })
})
