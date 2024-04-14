console.log("OpenVB #1 Loaded")
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
        video.isplaying = true;
        break IsplayingCheck_If;
      }
      else {
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
};
document.getElementById("openvb_play").addEventListener("click", function () {
  video.toggle()
})
document.getElementById("openvb_fullscreen").addEventListener("click", function () {
  video.fullscreen()
})