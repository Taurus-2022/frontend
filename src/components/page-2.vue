<script >
function unmuteVideo () {
  document.getElementById('media').muted = false
}
export default {
  data () {
    return {
      time: false,
      state: false
    }
  },
  mounted () {
    if (!this.state) {
      document.getElementById('media').addEventListener('ended', this.afterVideoPlay, false)
    }
    document.getElementById('media').addEventListener('play', unmuteVideo, false)
  },
  unmounted() {
    document.getElementById('media').removeEventListener('ended', this.afterVideoPlay)
    document.getElementById('media').removeEventListener('play', unmuteVideo)
  },
  methods: {
    afterVideoPlay () {
      this.time = !this.time
      this.state = true
    },
  }

}


</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p2.png' @click="store.nextPageIndex">
    <div class='video-container'>
      <video
id="media" muted controls autoplay
             webkit-playsinline playsinline
             src='https://bucket.taurus.cd.peanut996.cn/video/v1.mp4'>
      </video>
    </div>
    <div v-if="time" class='slide-container'>
      <p>向下滑动</p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  padding: 0;

  .background {
    min-height: 100vh;
    width: 100vw;
    position: absolute;
  }

  .video-container{
    width: 90vw;
    position: relative;
    min-width: 324px;
    height: 11.25rem;
    top: 15rem;
    left: 50%;
    transform: translateX(-50%);
    video{
      width:100%;
      height:100%;
      object-fit: cover;
      clip-path: inset(1.5rem 0);
    }
  }

  .slide-container {
    min-width: 295.2px;
    width: 82vw;
    font-size: 1.2rem;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    top: 40rem;
    left: 50%;
    transform: translateX(-50%);
    p {
      text-align: center;
      color: white;
    }
    @media screen and (min-width: 370px) {
      top: 42rem;
    }
    @media screen and (min-width: 390px) {
      top: 37.5rem;
    }
    @media screen and (min-width: 400px) {
      top: 39rem;
    }
    @media screen and (min-width: 410px) {
      top: 41rem;
    }
    @media screen and (min-width: 450px) {
      top: 45rem;
    }
    @media screen and (min-width: 470px) {
      top: 48rem;
    }
    @media screen and (min-width: 500px) {
      top: 41rem;
    }
    @media screen and (min-width: 530px) {
      top: 45rem;
    }
    @media screen and (min-width: 550px) {
      top: 46rem;
    }
    @media screen and (min-width: 580px) {
      top: 50rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 1.1rem;
      top: 38rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 1rem;
      top: 40rem;
    }
    @media screen and (min-width: 750px) {
      top: 38rem;
    }
    @media screen and (min-width: 800px) {
      top: 40rem;
    }
  }
}
</style>
