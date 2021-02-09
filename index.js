function myFunction() {
  var x = screen.width;
  console.log(x);
  if (x <= 568){
    $("#backgroundChange").attr("src", "images/Background2.jpg");
    $("#textChange").text("Hi, ");
    $("#textChange2").text("I'am Iqbal");
  }
  else if (x > 568 && x <= 1023) {
    $("#backgroundChange").attr("src", "images/Background4.jpg");
    $("#textChange").text("Hi, I'am Iqbal");
    $("#textChange2").text("");
  }
  else {
    $("#backgroundChange").attr("src", "images/Background.jpg");
    $("#textChange").text("Hi, I'am Iqbal");
    $("#textChange2").text("");
  }
}

myFunction();// Call listener function at run time
$(window).resize(function(){
  myFunction();
});// Attach listener function on state changes
