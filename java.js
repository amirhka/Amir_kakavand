function myFunction() {
	
    var x = document.getElementById("snackbar")

    x.className = "show";

    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//document.addEventListener("contextmenu", function(e){
  //  e.preventDefault();
//}, false);