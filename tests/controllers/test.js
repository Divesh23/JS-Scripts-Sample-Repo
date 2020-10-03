const { throws } = require('assert');
var assert=require('assert');
var authController=require('../../controllers/auth.controllers')
var expect = require('chai').expect;
var should=require('chai').should();
var chai=require('chai');
var chaiaspromised=require('chai-as-promised');
var sinon=require('sinon');
chai.should();
chai.use(chaiaspromised);


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
            var isAuth=authController.isAuthorized('admin');
            //authController.setRoles(['user']);
            assert.equal(false,isAuth);
            expect(isAuth).to.be.false;

        })
        it('should return true if  authorized',function(){
            authController.setRoles(['user','admin']);
            var isAuth=authController.isAuthorized('admin');
            isAuth.should.be.true;
            //assert.equal(true,authController.isAuthorized('admin'));

        })
        it('should not return get if not authorized');
        it('should return get if authorized');
    })

    describe.skip('IsAuthorizedAsync',function(){

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

    describe.skip('IsAuthorizedPromised',function(){

        it('should return false if not authorized',function(){
           //no call back but returns via Promsied
           this.timeout(3000);
           return authController.isAuthorizedPromised('admin').should.eventually.be.false;
          
        })

    })


    describe.only('Get Index',function(){

        it('should get the Index of the function',function(){
          var req={};
          var res={
              render:sinon.spy()
          };

          authController.getIndex(req,res);
          console.log(res.render);
          
        })

    })


});