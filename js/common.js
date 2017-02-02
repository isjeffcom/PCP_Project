



function showText(x){
  var d = document.getElementById(x);
  d.style.WebkitAnimationName = 'fadeIn2';
  d.style.animationName = 'fadeIn2';
  d.style.opacity = '1';
}

function unShowText(x){
  var d = document.getElementById(x);
  d.style.WebkitAnimationName = 'fadeOut3';
  d.style.animationName = 'fadeOut3';
  d.style.opacity = '0';
}

function coverImg(x){
  var d = document.getElementById(x);
  d.style.opacity = '0.1';
}

function unCoverImg(x){
  var d = document.getElementById(x);
  d.style.opacity = '0.6';
}

function scrollDown() {
  var t=0;
  var an = setInterval(frame, 5); //Set a timer abd run this function in every 5 mm second
  function frame(){ //Animation Function
    if(t == 153){
      clearInterval(an);  //clear animation
    }else{
      t++;
      window.scrollBy(0, 7); //Scroll from left
      console.log(t);
    }
  }

}


window.addEventListener("scroll", function(event) {
    var nav = document.getElementById('nav');
    var top = this.scrollY;
    if(top >= 200){
      nav.style.animationName = 'navOut';
      nav.style.opacity = '1';
    }

    if(top <= 200){
      nav.style.animationName = 'navOutRe';
      nav.style.opacity = '0.2';
    }

    if(top >= 500){
      nav.style.animationName = 'navOutBg';
      nav.style.backgroundColor = 'rgba(25,36,56,0.9)';
    }

    if(top <= 500){
      nav.style.animationName = 'navOutBgRe';
      nav.style.backgroundColor = 'transparent';
    }
    //console.log(top);

}, false);
