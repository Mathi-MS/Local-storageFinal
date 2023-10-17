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