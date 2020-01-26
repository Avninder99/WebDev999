var usernames = ["avninder","gautami","chonark","mosh"];
var passwords = ["A99","Astro77","Moron7","cbse"];
var user = document.querySelector("#exampleInputEmail1");
var pass = document.querySelector("#exampleInputPassword1");
var box = document.querySelector("#exampleCheck1");
var log = document.querySelector(".btn1");
var correct = 0;
var username = "";
var password = "";
box.addEventListener("click",function(){
    if(pass.type === "password"){
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
});
user.addEventListener("change",function(){
    username = user.value;
});
pass.addEventListener("change",function(){
    password = pass.value;
});
log.addEventListener("click",function(){
    for(var x=0 ; x<usernames.length ; x++ ){
        if(username === usernames[x] && password === passwords[x]){
            console.log("Valid user " + username);
            correct = 1;
            if(correct === 1){
                log.style.background = "yellow";
            }
        }
        if(correct === 1){
            log.style.background = "yellow";
        }
    }
});