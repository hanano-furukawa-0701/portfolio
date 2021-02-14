window.onload = function (){
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

  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0;i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) =>{
      e.preventDefault();
      let href =smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#',""));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 65;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
    });
  }


  const btn = document.getElementById('dropdown-btn');
  if(btn){
    btn.addEventListener('mouseover', function(){
      this.classList.toggle('is-open');
      console.log('ok');
    });
  }
};