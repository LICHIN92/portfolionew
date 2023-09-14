let che;
function namevalid(){
    document.getElementById("name").style.textTransform="uppercase"
    let nam=document.getElementById("name").value;
    che=/^[a-z. a-z]+$/i
   let result= che.test(nam);
   
console.log(nam)
if(result){
    document.getElementById("nameval").innerHTML='verified'
    document.getElementById("nameval").style.color="green"
    console.log("valid");
    return true;
}
else{
    document.getElementById("nameval").innerHTML="Name is not verified"
    document.getElementById("nameval").style.color="red"
    console.log("not valid");
    return false;
}
}
function mobilevalid(){
    let num=document.getElementById("mobile").value;
    che=/^[0-9]{10,10}$/;
    let result=che.test(num);
    if(result){
        document.getElementById("mobilevalid").innerText="verified"
        document.getElementById("mobilevalid").style.color="green"
        console.log("valid");
        return true;
    }
    else{
        document.getElementById("mobilevalid").innerText="Mobile Number is not verified"
        document.getElementById("mobilevalid").style.color="red"
        console.log("not valid");
        return false;
    }
}
function emailvalid(){
    let mail=document.getElementById("email").value;
    che=/^([a-z0-9-_.]+)@([a-z0-9]{2,20})\.([a-z]{2,10})$/i;
    let result=che.test(mail)
    if(result){
        document.getElementById("emailvalid").innerHTML="Email verified"
        document.getElementById("emailvalid").style.color="green"
        console.log(" valid");
        return true;
    }
    else{
        document.getElementById("emailvalid").innerHTML="Email is not verified"
        document.getElementById("emailvalid").style.color="red"
        console.log("not valid");
        return false;
    }
}
function passvalid(){
   let pass=document.getElementById("password").value;
   che=/^([a-z0-9]){6,6}$/i
   let result=(che.test(pass))
   if(result){
       document.getElementById("passvalid").innerHTML="Password is verified"
       document.getElementById("passvalid").style.color="green"
       return true;
   }
   else{
    document.getElementById("passvalid").innerHTML="Maximum length 6"
    document.getElementById("passvalid").style.color="red"
    return false;
   }
}
function submitt(){
    namevalid();
    mobilevalid();
    emailvalid();
    passvalid();
 if(namevalid() && mobilevalid() && emailvalid() && passvalid())
  {
    return true;
  }
 else {
     return false;
   }
}