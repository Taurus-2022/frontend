<script setup>
import { useStore } from '../stores/pageIndex';
const store = useStore();
</script>

<template>
  <div
    class="video-container"
    :style="{ visibility: store.currentPageIndex === 3 ? 'visible' : 'hidden', width: store.currentPageIndex === 3 ? '90vw' : '0' }"
  >
    <video id="media" controls muted webkit-playsinline playsinline src="https://bucket.taurus.cd.peanut996.cn/video/v1.mp4"></video>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  position: absolute;
  min-width: 324px;
  top: 33%;
  left: 50%;
  transform: translateX(-50%);
  @media screen and (min-height: 780px) {
    top: 30%;
  }
  @media screen and (min-height: 1000px) {
    top: 30%;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
</style>
