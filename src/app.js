import './style.css';

((window, video) => {
    var videoLoadedFunc = () => {
        video.play();
        video.playbackRate = 0.5;
        video.removeEventListener("canplaythrough", videoLoadedFunc);
    };
    video.addEventListener("canplaythrough", videoLoadedFunc); 
})(window, document.getElementById("my-video"));