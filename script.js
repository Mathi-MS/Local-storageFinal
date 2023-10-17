//selecting inputs
var title = document.getElementById("title")
var desc = document.getElementById("desc")
var price = document.getElementById("price")
// var imagee = document.getElementById("imagee")
var limit = document.getElementById("limit")
var protitile = document.getElementById("protitile")
var prodesc = document.getElementById("prodesc")
var proprice = document.getElementById("proprice")
var proimg = document.getElementById("proimg")
var totalamount = document.getElementById("totalamount")
//btn
 var addche = document.getElementById("addche")


var fileInput = document.getElementById('fileInput');
var imagePreview = document.getElementById('imagePreview');

fileInput.addEventListener('change', function() {
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        imagePreview.src = event.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('saveButton').addEventListener('click', function() {

  // localStorage.getItem("title1",title.textContent)
  var file = fileInput.files[0];
  localStorage.setItem('titlee', title.value);
  localStorage.setItem('desce', desc.value);
  localStorage.setItem('pricee', price.value);
  

  if (file) {
      var reader = new FileReader();

      reader.onload = function(event) {
          localStorage.setItem('savedImage', event.target.result);
          // window.location.href = 'retrieve.html'; // Redirect to the second page
      };

      reader.readAsDataURL(file);
  }
});




//btn function
function add() {
  // var imageElement = document.getElementById('image-preview');

  // var imageDataURL = imageElement.src;

  // localStorage.setItem('savedImage', imageDataURL);
 


  protitile.textContent=title.value.substring(0,20)
  prodesc.textContent=desc.value.substring(0,80)+"..."
  proprice.textContent="₹"+price.value



  // proimg
  var proimg = localStorage.getItem('savedImage');
  if (proimg) {
      document.getElementById('proimg').src = proimg;
  }

  

  // title 
  if (title.value) {
    console.log("hello");
    title.style.borderColor="green"
  }else{
    title.style.borderColor="red"
  }
  // desc
  if (desc.value) {
    console.log("hello");
    desc.style.borderColor="green"
  }else{
    desc.style.borderColor="red"
  }
  // price
  if (price.value) {
    console.log("hello");
    price.style.borderColor="green"
  }else{
    price.style.borderColor="red"
  }
  // imagee
  if (fileInput.value) {
    console.log("hello");
    fileInput.style.color="green"
  }else{
    fileInput.style.color="red"
  }
  // limit
  if (limit.value) {
    console.log("hello");
    limit.style.borderColor="green"
  }else{
    limit.style.borderColor="red"
  }

  if(limit.value && fileInput.value && price.value && desc.value && title.value){
    addche.innerHTML="<button type='submit' class='btn btn-primary'  data-dismiss='modal'>Confirm</button>"
    console.log(addche.innerHTML);
  }else{
    console.log("ggjh");
    addche.innerHTML="<button type='submit' class='btn btn-primary' onclick='add()' >Add</button>"
  }
}




var dropLabel = document.getElementById("dropLabel")
dropLabel.addEventListener("click",function(){

  addche.innerHTML="<button type='submit' class='btn btn-primary' onclick='add()' >Add</button>"
})





//selecting plus minus and value
var minus = document.querySelector(".minus")
var plus = document.querySelector(".plus")
var valueadd = document.querySelector(".valueadd")
var Max = document.querySelector("#Max")
var valuee = 0
plus.addEventListener("click",function(){
  valuee =valueadd.textContent
  if(valueadd.textContent==limit.value){
    Max.textContent="Reached Max Limit"
    valueadd.textContent=parseInt(limit.value)
  }else{
    Max.textContent="Limit"
    valueadd.textContent = parseInt(valuee)+1
    totalamount.value= valueadd.textContent*price.value

  }

})
minus.addEventListener("click",function(){
  valuee =valueadd.textContent
  if(valuee == 0){
    valueadd.textContent = 0    
    Max.textContent="Limit"
  }else{
  valueadd.textContent = parseInt(valuee)-1
  Max.textContent="Limit"
  totalamount.value= valueadd.textContent*price.value

  }

})

var shope = document.getElementById("shop")
function shop() {
  // alert("Successfully ordered :"+protitile.textContent+"\nTotal Price :"+totalamount.value)
  localStorage.setItem('totale', totalamount.value);
  localStorage.setItem('items', valueadd.textContent);
  if(totalamount.value>3){
    shope.setAttribute("href","in.html")
  }
}

var off = document.getElementById("off")
var on = document.getElementById("on")
var black = document.getElementById("black")
var left = document.getElementById("left")
var navlight = document.getElementById("navlight")
var whoo = document.getElementById("whoo")
var who = document.getElementById("who")

off.addEventListener("click",function(){
  black.style.backgroundColor="black"
  left.style.backgroundColor="white"
  off.style.visibility="hidden"
  on.style.visibility="visible"
  left.style.color="black"
  navlight.style.color="white"
  whoo.style.color="black"
  who.style.color="black"
  navlight.style.backgroundColor="white"
})
on.addEventListener("click",function(){
  black.style.backgroundColor="grey"
  left.style.backgroundColor="black"
  on.style.visibility="hidden"
  off.style.visibility="visible"
  left.style.color="White"
  navlight.style.color="White"
  navlight.style.backgroundColor="black"
  whoo.style.color="white"
  who.style.color="white"
})