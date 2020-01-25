var login  =document.getElementById("login");
//var name  =document.getElementById("name");
var password  =document.getElementById("password");
//var number  =document.getElementById("PhoneNumber");
var email=document.getElementById("email");
var arr=[];
var k=0;

login.addEventListener("click",enterArray);
function enterArray()
{
	
  
   
   arr=JSON.parse(localStorage.getItem("registerDetails"));
   //console.log(JSON.parse(localStorage.getItem("registerDetails")));
   //console.log(arr);
   //console.log(arr[0].pass);
   for(k=0;k<arr.length;k++)
   {console.log(arr[k].email);
   	console.log(JSON.stringify(email.value));
   	if(arr[k].email==JSON.stringify(email.value))
   	{ console.log(arr[k].pass);
   		console.log(password.value);
   		if(arr[k].pass==password.value)
   		{ //console.log(1);
              console.log(arr[k].email);
          window.location.href="addressbook.html";
   		}
   	}
   }
       
 
}
