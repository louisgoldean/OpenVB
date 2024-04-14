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
      if (video.isplaying == false){
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
  }
};
document.getElementById("openvb_play").addEventListener("click", function () {
  video.toggle()
})
const isVideoPlaying = video => !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
console.log(isVideoPlaying(document.getElementById("openvb_video")))