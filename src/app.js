import './style.css';

document.getElementById("root").innerHTML = require('./contents.html');
  
((window, video) => {
    var videoLoadedFunc = () => {
        video.play();
        video.playbackRate = 0.5;
        video.removeEventListener("canplaythrough", videoLoadedFunc);
    };
    video.addEventListener("canplaythrough", videoLoadedFunc); 
})(window, document.getElementById("my-video"));