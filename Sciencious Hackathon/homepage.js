document.getElementById("menu_icon").addEventListener("click", myFunction);
var d = document.getElementById("menu_items");
function myFunction() {
  if(d.style.display == "block"){
    d.style.display = "none";
  }
  else{
    d.style.display = "block";
  }
}