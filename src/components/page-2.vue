<script>
function unmuteVideo() {
  document.getElementById('media').muted = false;
}
export default {
  data() {
    return {
      time: false,
      state: false,
    };
  },
  mounted() {
    if (!this.state) {
      document.getElementById('media').addEventListener('ended', this.afterVideoPlay, false);
    }
    document.getElementById('media').addEventListener('play', unmuteVideo, false);
  },
  unmounted() {
    document.getElementById('media').removeEventListener('ended', this.afterVideoPlay);
    document.getElementById('media').removeEventListener('play', unmuteVideo);
  },
  methods: {
    afterVideoPlay() {
      this.time = !this.time;
      this.state = true;
    },
  },
};
</script>
<script setup>
import { useStore } from '../stores/pageIndex';
import { onMounted, ref } from 'vue';
const store = useStore();
const isScrollToBottom = ref(false);
onMounted(() => {
  // console.log(window.page2);
  const onScroll = (event) => {
    // const currentPosition = window['page2'].scrollTop;
    // console.log('------------',currentPosition);
    // console.log('------------page2',window.page2.offsetHeight);//667
    // console.log('------------',window.innerHeight);//667
    var element = event.target;
    // console.log(element.scrollHeight);//753
    // console.log(element.scrollTop);
    if (element.scrollHeight <= element.scrollTop + element.offsetHeight) {
      console.log('scrolled');
      isScrollToBottom.value = true;
    }
  };
  window['page2'].addEventListener('scroll', onScroll);
});

const nextPage = () => {
  if (isScrollToBottom.value) {
    store.nextPageIndex();
  }
};
</script>
<template>
  <div id="page2" v-touch:swipedown="nextPage" class="container">
    <img class="background" src="/src/assets/p2.png" />
    <div class="video-container">
      <video
        id="media"
        controls
        autoplay
        muted
        webkit-playsinline
        playsinline
        src="https://bucket.taurus.cd.peanut996.cn/video/v1.mp4"
      ></video>
    </div>
    <div v-if="time" class="slide-container">
      <p>向下滑动</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  .video-container {
    width: 90vw;
    position: relative;
    min-width: 324px;
    height: 11.25rem;
    top: 15rem;
    left: 50%;
    transform: translateX(-50%);
    video {
      width: 100%;
      height: 100%;
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
