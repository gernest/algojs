let sort=require('../sort');
let assert=require('assert');

describe("Sort",function(){
    it("should buble sort ", function(){
        assert.deepEqual([1,2,3,4,5,6],sort.bubble([5,1,6,2,4,3]))
    })
    it("should selection sort ", function(){
        assert.deepEqual([1,2,3,4,5,6],sort.selection([5,1,6,2,4,3]))
    })
    it("should insertion sort ", function(){
        assert.deepEqual([1,2,3,4,5,6],sort.insertion([5,1,6,2,4,3]))
    })
})
