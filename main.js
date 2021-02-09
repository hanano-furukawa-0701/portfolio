$(function(){
  var header_pics = ["images/header1.PNG", "images/header2.jpg", "images/header3.JPG"];
  var num = 0;
  setInterval(function(){
    if (num == header_pics.length - 1){
      num = 0;
    } 
    else {
      num ++;
    }
    document.getElementById("header-pic").src = header_pics[num];
  },5000);
});