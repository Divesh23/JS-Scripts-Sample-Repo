var assert= require('assert');
var helloworld=require('../../helloworld/helloworld');

describe('Hello World Test',function(){

    it('should return true if it contains Hello World',function(){

        assert.equal(helloworld(),'Hello World')

    })
}); 