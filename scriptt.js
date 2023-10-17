//button
var off = document.getElementById("off")
var on = document.getElementById("on")
var black = document.getElementById("black")
var left = document.getElementById("left")
var navlight = document.getElementById("navlight")

off.addEventListener("click",function(){
  black.style.backgroundColor="black"
  left.style.backgroundColor="white"
  off.style.visibility="hidden"
  on.style.visibility="visible"
  left.style.color="black"
  navlight.style.color="white"
  navlightt.style.backgroundColor="black"
  navlightt.style.color="white"
  navlightt.style.borderColor="black"
})
on.addEventListener("click",function(){
  black.style.backgroundColor="white"
  left.style.backgroundColor="black"
  on.style.visibility="hidden"
  off.style.visibility="visible"
  left.style.color="White"
  navlight.style.color="black"
  navlightt.style.backgroundColor="black"
  navlightt.style.color="white"
  navlightt.style.borderColor="grey"
})

///localStorage


var imageee = localStorage.getItem('savedImage');
if (imageee) {
    document.getElementById('imageee').src = imageee;
}
document.getElement
function getLocalStorage() {
  let titlee= localStorage.getItem("titlee")
  document.getElementById("titleee").innerHTML=titlee.substring(0,20)+"."

  let desce= localStorage.getItem("desce")
  document.getElementById("desce").innerHTML=desce.substring(0,80)+"..."

  let pricee= localStorage.getItem("pricee")
  document.getElementById("pricee").innerHTML="₹"+pricee
  
  let totale= localStorage.getItem("totale")
  document.getElementById("totale").innerHTML="₹"+totale

  let items= localStorage.getItem("items")
  document.getElementById("items").textContent=+items
}
getLocalStorage()


///order
function order() {
  addchh.innerHTML=" <button type='submit' class='btn btn-primary' onclick='btnordernow()'>Order Now</button>"
  close.style.visibility="visible"

}
 
//popup 
//selecting input
var recipient = document.getElementById("recipient-name")
var message = document.getElementById("message-text")

var rename = document.getElementById("name-label")
var adname = document.getElementById("address-label")


var addchh = document.getElementById("addchh")
var exampleModal = document.getElementById("exampleModal")
var close = document.getElementById("close")



function btnordernow(){
let value = "math"
    if(recipient.value){
      if(recipient.value.length>=value.length){
      recipient.style.border="solid 3px green"
      rename.textContent="Name:"
     }else{
      recipient.style.border="solid 3px red"
      rename.textContent="Name: should Atlest 4 Character"
     }
    }else{
      recipient.style.border="solid 3px red"
      rename.textContent="Name:Enter Your Name"
    }

let valuee = 20
    if(message.value){
      if(message.value.length>valuee){
      message.style.border="solid 3px green"
      adname.textContent="Address:"
     }else{
      message.style.border="solid 3px red"
      adname.textContent="Address: should Atlest 20 Character or Number"
     }
    }else{
      message.style.border="solid 3px red"
      adname.textContent="Address:Enter Your Address"
    }

    if(recipient.value.length>value.length == true && message.value.length>valuee){
      addchh.innerHTML="  <button type='submit' class='btn btn-success' data-dismiss='modal' >Successfully Ordered</button>"
      close.style.visibility="hidden"
      swal({
        title: "Good job!",
        text: "You Ordered Successfully!",
        icon: "success",
        button: "Ok",
      });
      
    }else{
      addchh.innerHTML=" <button type='submit' class='btn btn-danger' onclick='btnordernow()'>Order Now</button>"
    }

  }
  close.addEventListener("click",function () {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
  })
  