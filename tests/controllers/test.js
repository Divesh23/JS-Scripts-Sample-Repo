const { throws } = require('assert');
var assert=require('assert');
const authControllers = require('../../controllers/auth.controllers');
var authController=require('../../controllers/auth.controllers')

describe('AuthController',function(){
    beforeEach (function settingValue(){
        console.log('Running before each');
        authController.setRoles(['user']);

    });

    /*beforeEach ('This is an intentional abrupt error',function errorFunction(){
       throws({error:'error'});

    });*/

    describe.only('IsAuthorized',function(){

        it('should return false if not authorized',function(){
            authController.setRoles(['user']);
            assert.equal(false,authController.isAuthorized('admin'));

        })
        it('should return true if  authorized',function(){
            authController.setRoles(['user','admin']);
            assert.equal(true,authController.isAuthorized('admin'));

        })
        it('should not return get if not authorized');
        it('should return get if authorized');
    })

    describe.only('IsAuthorizedAsync',function(){

        it('should return false if not authorized',function(done){
            // if (true){
            //     //something environmental
            //     this .skip()
            // }
            // else{
            this.timeout(3000);
            authController.setRoles(['user']);
           authController.isAuthorizedAsync('admin',
           function(isAuth){
            assert.equal(false,isAuth);
            done();
           });
        //}
        })

    })


});