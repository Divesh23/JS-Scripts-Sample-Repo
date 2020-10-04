function AuthController(){

    var user;
    var roles;
    function setRoles(role){
        roles=role;

    }

    function setUser(inUser){
        user=inUser;

    }
    function isAuthorized(neededRole){
        if(user){
            return user.isAuthorized(neededRole);
        }
        //return roles.indexOf(neededRole) >=0;
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
        //res.render('index');

   }

    return {isAuthorized,isAuthorizedAsync,setRoles,isAuthorizedPromised,getIndex,setUser};
}

module.exports = AuthController(); 