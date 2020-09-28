var assert=require('assert');
var authController=require('../../controllers/auth.controllers')

describe('AuthController',function(){

    describe('IsAuthorized',function(){

        it('should return false if not authorized',function(){

            assert.equal(false,authController.isAuthorized(['user'],'admin'));

        })
        it('should return true if  authorized',function(){

            assert.equal(true,authController.isAuthorized(['user','admin'],'admin'));

        })

    })


});