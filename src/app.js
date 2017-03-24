import './style.css';

((window, video) => {
    var videoLoadedFunc = () => {
        video.play();
        video.playbackRate = 0.5;
        video.removeEventListener("canplaythrough", videoLoadedFunc);
    };
    video.addEventListener("canplaythrough", videoLoadedFunc); 
})(window, document.getElementById("my-video"));

((window, cobj)=>{
    var front = document.getElementsByClassName("front")[0];
    var back = document.getElementsByClassName("back")[0];
    var fn = () => {
        front.className = "front__animation__next";
        back.className = "back__animation__next";
    };
    var fn2 = () => {
        front.className = "front__animation__forward";
        back.className = "back__animation__forward";
    };
    cobj[0].addEventListener("click", fn);
    cobj[1].addEventListener("click", fn2);
})(window, document.getElementsByClassName("content__button"));

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-75074154-1', 'auto');
  ga('send', 'pageview');
