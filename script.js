var namecontainer=document.querySelector(".name")
var mobcontainer=document.querySelector(".mob")
var emailcontainer=document.querySelector(".email")

var nameicon=namecontainer.querySelector("i")
var mobicon=mobcontainer.querySelector("i")
var emailicon=emailcontainer.querySelector("i")


var namelabel=namecontainer.querySelector("label")
var moblabel=mobcontainer.querySelector("label")
var emaillabel=emailcontainer.querySelector("label")


var nameinput=document.getElementById("name")
var mobinput=document.getElementById("mob")
var emailinput=document.getElementById("email")

nameinput.addEventListener("keyup",function(){
   var enteredvalue=nameinput.value

   if(enteredvalue==''){
       namelabel.style.visibility="visible"
       nameicon.style.visibility="hidden"

   }
   else{
    namelabel.style.visibility="hidden"
    nameicon.style.visibility="visible"
   }


})

mobinput.addEventListener("keyup",function(){
    var enteredvalue=mobinput.value
 
    if(enteredvalue==''){
        moblabel.style.visibility="visible"
        mobicon.style.visibility="hidden"
 
    }
    else if(enteredvalue.length<10){
        moblabel.style.visibility="visible"
        mobicon.style.visibility="hidden"
        moblabel.textContent="enter 10 Digit mobile number"

    }
    else if(enteredvalue.length>10){
        moblabel.style.visibility="visible"
        mobicon.style.visibility="hidden"
        moblabel.textContent="enter 10 Digit mobile number"

    }

    else{
     moblabel.style.visibility="hidden"
     mobicon.style.visibility="visible"
    }
 
 
 })

 emailinput.addEventListener("keyup",function(){
    var enteredvalue=emailinput.value
 
    if(enteredvalue==''){
        emaillabel.style.visibility="visible"
        emailicon.style.visibility="hidden"
 
    }
    else{
     emaillabel.style.visibility="hidden"
     emailicon.style.visibility="visible"
    }
 
 
 })