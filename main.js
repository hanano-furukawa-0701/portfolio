$(function(){
  var header_pics = ["images/header1.PNG", "images/header2.jpg", "images/header3.JPG"];
  var num = -1;
  
  function slideshowTimer(){
    if (num == header_pics.length){
      num = 0;
    } 
    else {
      num ++;
    }
    document.getElementById("header-pic").src = header_pics[num];
    setTimeout("slideshowTimer()", 5000);
  };
  
  slideshowTimer();
  
});