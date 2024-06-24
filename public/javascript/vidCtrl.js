//                                       Change Video Here l
//                                                         l
//                                                         v
document.getElementById("openvb_video").src = "./openvb/example.mp4";
var slider = document.getElementById("openvb_slider");
const video = {
  isplaying: false,
  play: () => {
    document.getElementById("openvb_video").play();
  },
  pause: () => {
    document.getElementById("openvb_video").pause();
  },
  toggle: () => {
    IsplayingCheck_If: if (true){
      if (video.isplaying !== true){
        video.play();
        document.getElementById("openvb_play").src = "./openvb/svg/Play.svg";
        video.isplaying = true;
        break IsplayingCheck_If;
      }
      else {
        document.getElementById("openvb_play").src = "./openvb/svg/Pause.svg";
        video.pause();
        video.isplaying = false;
        break IsplayingCheck_If;
      }
    }
  },
  fullscreen:  () => {
    if (document.fullscreen){
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }
}
document.getElementById("openvb_play").addEventListener("click", function () {
  video.toggle()
});
document.getElementById("openvb_fullscreen").addEventListener("click", function () {
  video.fullscreen()
});
video.toggle()
video.toggle()
setInterval(function(){
  slider.value = document.getElementById("openvb_video").currentTime / 2.11;
}, 1); 
slider.oninput = function() {
  document.getElementById("openvb_video").currentTime = slider.value * 2.11;
}
slider.max = document.getElementById("openvb_video").duration;
