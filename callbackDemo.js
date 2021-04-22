function gotoDashboard() {
    console.log('welcome');
}
function errorHandling() {
    console.log('Try Again');
}
function login(user, pwd, success, error){
    setTimeout(function(){
        if(user =='admin' && pwd =='admin'){
            success();
        } else {
            error();
        }
    }, 3000);
};
function letsLogin(){           //u,p
    login('admin','admin', gotoDashboard, errorHandling);
}
letsLogin();