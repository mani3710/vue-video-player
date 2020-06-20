<template>
  <div class="player">
   
 <div>
  <img
  v-on:click="play"
   src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png" id="playImage" width="100" height="100" /> 
   <label style="width:30px"></label>
    <img
  v-on:click="pause"
   src="http://hybridtv.ss7.tv/techtest/assets/icons/btn-pause.png" id="playImage" width="100" height="100" />
    </div>
  
<video id="video1" width="1000" height="600" autoplay >
    <source  :src=$route.params.url type="video/mp4">
    <source src=$route.params.url type="video/ogg">
    
  </video>
    
  </div>
</template>

<script>
import VueCoreVideoPlayer from 'vue-core-video-player';
 
 
export default {
  name: 'Player',
  data () {
    return {
      msg: 'Player',
      datak:route.params.url,
      iconurl1:"http://hybridtv.ss7.tv/techtest/assets/icons/btn-play.png",

    }
  },
   components: {
    VueCoreVideoPlayer
  },
   methods: {
    play: function (event) {
        var myVideo = document.getElementById("video1");
      // `this` inside methods point to the Vue instance
      myVideo.play();
     
    },
     pause: function (event) {
        var myVideo = document.getElementById("video1");
      // `this` inside methods point to the Vue instance
      myVideo.pause();
     
    }
  }

}
// var myVideo = document.getElementById("video1");
// function playPause() { 
//   if (myVideo.paused) 
//     myVideo.play(); 
//   else 
//     myVideo.pause(); 
// } 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player{
    background-color: black;
}

</style>