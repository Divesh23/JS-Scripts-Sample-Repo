function AuthController(){

    var roles;
    function setRoles(role){
        roles=role;

    }
    function isAuthorized(neededRole){
        return roles.indexOf(neededRole) >=0;
    }

    function isAuthorizedAsync(neededRole,cb){
         setTimeout(function(){cb(roles.indexOf(neededRole) >=0)},2100);
    }

    function isAuthorizedPromised(neededRole,cb){
        return new Promise(function(resolve){
            setTimeout(function(){resolve(roles.indexOf(neededRole) >=0)},2100);

        })
        
   }

   function getIndex(req,res){
        res.render('index');

   }

    return {isAuthorized,isAuthorizedAsync,setRoles,isAuthorizedPromised,getIndex};
}

module.exports = AuthController(); 