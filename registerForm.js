var register  =document.getElementById("register");
var name  =document.getElementById("name");
var password  =document.getElementById("password");
var number  =document.getElementById("PhoneNumber");
var email=document.getElementById("email");
var arr=[];

register.addEventListener("click",enterArray);
function enterArray()
{
	var ob=new Object();
    
     ob.name=name.value;
     ob.email=JSON.stringify(email.value);
 
    ob.pass=document.getElementById("password").value;
    ob.number=number.value;
   
    arr.push(ob);
   

   
   localStorage.setItem("registerDetails",JSON.stringify(arr));
       
 
}
