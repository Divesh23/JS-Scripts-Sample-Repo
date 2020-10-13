var assert=require('assert');
var gitService=require('../../gitChecker/services/gitService')();
var expect = require('chai').expect;
var should=require('chai').should();
var chai=require('chai');
var chaiaspromised=require('chai-as-promised');
var sinon=require('sinon');
var https=require('https');

chai.should();
chai.use(chaiaspromised);

describe('Get Service',function(){

    describe('Get User',function(){
        it ('should return user and associated repos',function(){
            this.timeout(10000);
            return gitService.getUser('jonathanfmills').then(
                function(user){
                user.login.should.equal('jonathanfmills');
                user.should.have.property('repos');                }
            );
        })
    })
});