var div2=document.getElementById('div2');
//var t1=document.getElementById('t1');
var m=0;
var arr=[];

window.onload=function(){


// 'use strict';
// var get, create, text, i;
// get = localStorage.getItem("A");//retrieves announcements from local storage 
// create = JSON.parse(get);

// text = "";
// for (i = 0; i < 1; i++) { //displays multiple announcements
//     text += "<td>" + create[i].username;//displaysname
//     text += "<td>" + create[i].club;//displaysclub
//     text += "<td>" + create[i].category;//displayscategory
//     text += "<td>" + create[i].grade;//displaysgrade
//     text += "<td>" + create[i].gender;//displaysgender
//     text += "<td>" + create[i].Time;//displaystime
//     text += "<td>" + create[i].detail + "<tr>";
// }
//document.getElementById("cool").innerHTML = text;
arr=JSON.parse(localStorage.getItem('addDetails'))
//var i=arr.length-1;

for(var i=m;i<arr.length;i++)
{
    var d=document.createElement("div");
       d.setAttribute("id",i);

    var p1=document.createElement("p");
     p1.innerHTML=i;
       d.appendChild(p1);

    var p2=document.createElement("p");
    //p1.innerText=document.getElementById("i1").value;
     p2.innerHTML=arr[i].NM;
       d.appendChild(p2);


    var p3=document.createElement("p");
     p3.innerHTML=arr[i].add1;
       d.appendChild(p3);


       var p4=document.createElement("p");
     p4.innerHTML=arr[i].add2;
       d.appendChild(p4);

       var p5=document.createElement("p");
     p5.innerHTML=arr[i].EM;
       d.appendChild(p5);

       var p6 =document.createElement("p");
     p6.innerHTML=arr[i].pno;
       d.appendChild(p6);
   
   //div2.appendChild(d);
   

    var b3=document.createElement("button");
  b3.innerHTML="delete";
  b3.setAttribute("id","b2");
  d.appendChild(b3);

 
  b3.addEventListener("click",function(event)
									  { 
									    
										   var targetParent = event.target.parentNode;
										   var selectedProductIndex = parseInt(targetParent.id); 
										   //var q=getProductIndex(selectedProductIndex);
										  // console.log(selectedProductIndex);
                                           var indexInArray=getProductIndex(selectedProductIndex);
									      // console.log(targetParent.name);
										   //console.log(selectedProductIndex);
										   del(indexInArray);
										   targetParent.parentNode.removeChild(targetParent);
									  }
							);
// div1id.appendChild(document.createElement("br"));
//    var be=document.createElement("button");
// 	be.innerHTML="EDIT";
// 	be.setAttribute("id","be1");
	
// 	d.appendChild(be);

//     be.addEventListener("click",edit_value);
//   div1id.appendChild(document.createElement("br"));

 
// 	div3id.appendChild(d);
// 	deleteinput();


d.appendChild(document.createElement("br"));
d.appendChild(document.createElement("br"));
   var be=document.createElement("button");
	be.innerHTML="EDIT";
	be.setAttribute("id","be1");
	
	d.appendChild(be);

   be.addEventListener("click",edit_value);
//   div1id.appendChild(document.createElement("br"));

 
	
	//deleteinput();


	d.appendChild(document.createElement("br"));
	d.appendChild(document.createElement("br"));


	div2.appendChild(d);
	m=i+1;

}


   
}
function edit_value()
{
	window.location.href="addDetails.html";
}




















// arr=JSON.parse(localStorage.getItem('addDetails'))

// i=arr.length-1;
//    var tr1=document.createElement("tr");
//    t1.appendChild(tr1);

//    var tr11=document.createElement("td");
//    var tr111 = document.createTextNode(i);
//    tr11.appendChild("tr111");
//    tr1.appendChild("tr11");

//    var tr12=document.createElement("td");
//    tr12.innerHTML=arr[i].NM;
//    tr1.appendChild("tr12");

//    var tr13=document.createElement("td");
//    tr13.innerHTML=arr[i].add1
//    tr1.appendChild("tr13");

//    var tr17=document.createElement("td");
//    tr17.innerHTML=arr[i].pno
//    tr1.appendChild("tr17");

//    var tr14=document.createElement("td");
//    tr14.innerHTML=arr[i].EM
//    tr1.appendChild("tr14");

//    var tr15=document.createElement("td");
//    var b=document.createElement("button");
//    b.innerHTML='edit';
//    td.appendChild(b);
//    tr1.appendChild("tr15");

//    var tr16=document.createElement("td");
//    var b1=document.createElement("button");
//    b1.innerHTML='delete';
//    tr16.appendChild(b1);







// if(localStorage.getItem("carr")!=null)
// {
// var cart=JSON.parse(localStorage.getItem("carr"));
// if(localStorage.getItem("carr")!=null)
// {
// var tbl=document.getElementById("tab2");
// //console.log(tbl.rows.length);
//    while(tbl.rows.length>1)
//             {
//            tbl.deleteRow(1);
//             }
// }

// for(var i=0;i<cart.length;i++)
// {
// if(cart[i].itno>0)
// {

// var row=document.createElement("tr");
// row.setAttribute("id", cart[i].itid);

// var col1=document.createElement("td");
// col1.innerHTML=cart[i].itid;
// row.appendChild(col1);

// var col2=document.createElement("td");
// col2.innerHTML=cart[i].itnam;
// row.appendChild(col2);

// var col3=document.createElement("td");
// col3.innerHTML=cart[i].itdes;
// row.appendChild(col3);

// var col4=document.createElement("td");
// col4.innerHTML=cart[i].itno;
// row.appendChild(col4);

// var col5=document.createElement("td");
// var butt=document.createElement("button");
// butt.innerHTML="DELETE";
// col5.appendChild(butt);
// row.appendChild(col5);

//         tbl.appendChild(row);


//         butt.addEventListener("click", function(event)
//         {
//              var cc=event.target.parentNode.parentNode;
//              //console.log(cc.id);

//              var arrc=[];
//              arrc=JSON.parse(localStorage.getItem("carr"));
             
//              for(var q=0;q<arrc.length;q++)
//              {
//               if(cc.id == arrc[q].itid)
//               {
//                     if(arrc[q].itno>0)
//                     {
//               arrc[q].itno=arrc[q].itno-1;
//               localStorage.setItem("carr",JSON.stringify(arrc));
//               displaycart();
//               var itlis=[];
//                     itlis=JSON.parse(localStorage.getItem("item"));
//                     for(var w=0;w<itlis.length;w++)
//                     {
//                     if(cc.id==itlis[w].itid)
//                     {
                   
//                     itlis[w].itno=itlis[w].itno+1;
//                     localStorage.setItem("item", JSON.stringify(itlis));
//                     display();
//                     return;
                           
//                     }
//                     }
             
             

//               }
//               else
//               {
//               console.log("no item can be deleted further");
//               }
//              }
//              }


//         })
           
// }
// }

// }

function getProductIndex(u) 
{

    for (var i = 0; i < arr.length; i++) 
	{     
		console.log(u);
        if (arr[i].id == u) 
			{   
				console.log(i);
				return i;
			}
    }
} 

function deleteinput()
{
   var childNodes = div1id.childNodes;
   for (var i = 0; childNodes.length > 0;) 
   {
     div1id.removeChild(childNodes[i]);
   }
}
function del(c)
 {   
      //console.log(c);
     arr.splice(c,1);
    localStorage.setItem("addDetails",JSON.stringify(arr));
    
 }

 // function edit_value(e)
 // {
 // 	hide1();
 
	// div1id.appendChild(document.createTextNode("Give details of product"));
 //    div1id.appendChild(document.createElement("br"));
	// var i=document.createElement("input");
	// i.setAttribute("type","text");
	// i.setAttribute("placeholder","enter the product name");
	// i.setAttribute("id","i1");



	// div1id.appendChild(i);
     
    
 //    div1id.appendChild(document.createElement("br"));
 //    div1id.appendChild(document.createElement("br"));


 //    var ta=document.createElement("textArea");
 //    ta.setAttribute("height","20");
 //    ta.setAttribute("width","50");
 //    ta.setAttribute("placeholder","discription about the product");
 //    ta.setAttribute("id","ta1");
 //    div1id.appendChild(ta);


 //    div1id.appendChild(document.createElement("br"));
 //    div1id.appendChild(document.createElement("br"));


	// var b=document.createElement("button");
	// b.innerHTML="update";
	// b.setAttribute("id","b1");
	// div1id.appendChild(b);

	// var a1=e.target.parentNode;
 //   var c=a1.childNodes;//.setAttribute("style","visibility:visible");
 //   c[3].setAttribute("style","visibility:hidden");
	// var id1=getProductIndex(parseInt(a1.id));
	// //a1.childNode[3].setAttribute("style","visibility:visible");
	// // console.log(arr[id1].name);
	// document.getElementById("i1").value=arr[id1].name;
	
	// document.getElementById("ta1").value=arr[id1].details;
     
	// b.addEventListener("click",function(){

	// 	arr[id1].name=document.getElementById("i1").value;
	// 	arr[id1].desc=document.getElementById("ta1").value;
         
	//    a1.childNodes[0].innerHTML=document.getElementById("i1").value;
	//    a1.childNodes[1].innerHTML=document.getElementById("ta1").value;

	//   deleteinput();
 //        show();
 //       a1.childNodes[3].setAttribute("style","visibility:visible");

	// }   );

 // }