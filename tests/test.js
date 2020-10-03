var assert = require('assert');
const { expect } = require('chai');
var should= require('chai').should();
var obj= {name:'Divesh', age:30};
var obj2={name:'Divesh', age:30}

describe('Object Test', function(){

it('should equal values in object',function(){
   
    obj.should.have.property('age').equal(30) ; 
    obj2.should.have.property('name').equal('Divesh');
    //assert.equal(2,2);
})
it('should equal objects',function(){
    
    obj.should.deep.equal(obj2);
})

it('should show custom error message on failure',function(){
    
    obj.should.deep.equal(obj2,'Strict Equaity returns a failure, Try Deep.Equal');
})

it('expect better than should',function(){
    var isNull=null;
    //isNull.should.not.exist; --Change the syntax as isNull is not an object
    should.not.exist(isNull);
    //Expect is simple - Syntax remains the same.
    expect('isNull').to.exist;
})
}); 