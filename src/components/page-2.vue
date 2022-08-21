<script setup>
import { useStore } from '../stores/pageIndex';
import { onMounted, onUnmounted, ref } from 'vue';
const store = useStore();
const time = ref(false);
const state = ref(false);
const afterVideoPlay = () => {
  time.value = !time.value;
  state.value = true;
};
const unmuteVideo = () => {
  document.getElementById('media').muted = false;
};

onMounted(() => {
  if (!state.value) {
    document.getElementById('media').addEventListener('ended', afterVideoPlay, false);
  }
  document.getElementById('media').addEventListener('play', unmuteVideo, false);
});
onUnmounted(() => {
  document.getElementById('media').removeEventListener('ended', afterVideoPlay);
  document.getElementById('media').removeEventListener('play', unmuteVideo);
});

const nextPage = () => {
  if (time.value) {
    store.nextPageIndex();
  }
};
</script>
<script setup></script>
<template>
  <div id="page2" v-touch:swipeup="nextPage" class="container">
    <img :class="['background', 'page-png']" src="/src/assets/p2-background.png" />
    <img :class="['text', 'page-png']" src="/src/assets/p2-text.png" />
    <img :class="['train', 'page-png']" src="/src/assets/p2-train.png" />
    <div v-if="time" class="slide-container">
      <p>向下滑动</p>
      <van-icon class="down" name="arrow-down" />
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
  background: rgb(91, 172, 199);
  background: linear-gradient(0deg, rgba(91, 172, 199, 1) 0%, rgba(204, 219, 245, 1) 50%, rgba(204, 219, 245, 1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .background {
    margin-top: 20%;
    @media screen and (min-width: 800px) {
      margin-top: 8%;
    }
  }
  .background,
  .train {
    width: 100vw;
  }
  .text {
    width: 60%;
  }

  .slide-container {
    min-width: 295.2px;
    width: 82vw;
    font-size: 1.2rem;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    p {
      text-align: center;
    }

    @media screen and (min-width: 400px) {
      top: 85%;
    }
    @media screen and (min-width: 410px) {
      top: 85%;
    }
    @media screen and (min-width: 450px) {
      top: 80%;
    }
    @media screen and (min-width: 600px) {
      font-size: 1.1rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 1rem;
    }
    @media screen and (min-width: 800px) {
      top: 85%;
    }
  }
  .down {
    animation: downMove 2s infinite;
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    font-size: 1.5rem;
  }

  @keyframes downMove {
    from {
      top: 0;
      opacity: 0.4;
    }
    to {
      top: 0.8rem;
      opacity: 0.4;
    }
    75% {
      opacity: 0.7;
    }
  }
}
</style>
