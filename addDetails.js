var button  =document.getElementById("button");
var NM  =document.getElementById("NM");
var pno  =document.getElementById("pno");
var add1  =document.getElementById("add1");
var add2  =document.getElementById("add2");
var EM=document.getElementById("EM");
var arr=[];
window.onload=function()
 {
 	if(localStorage.getItem("item")!='\0')
 {
 	// if (!localStorage['arr']) arr = [];
 	// else
    arr=JSON.parse(localStorage.getItem("addDetails")||[]);
    //console.log(arr);
     
 }
 
 }
button.addEventListener("click",enterArray);
function enterArray()
{
	var ob=new Object();
    
     ob.NM=NM.value;
     ob.EM=EM.value;
 
    ob.pno=pno.value;
    ob.add1=add1.value;
    ob.add2=add2.value;
   
    arr.push(ob);
   

   
   localStorage.setItem("addDetails",JSON.stringify(arr));
       
 
}
