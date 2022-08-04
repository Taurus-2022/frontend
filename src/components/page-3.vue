<script>
import {
  Swipe,
  SwipeItem,
} from 'vant';


export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
}
</script>
<script setup>
import { useStore } from '../stores/pageIndex';
import sp1Path from '../assets/swiper/sp1.png'
import sp2Path from '../assets/swiper/sp2.png'
import sp3Path from '../assets/swiper/sp3.png'
import sp4Path from '../assets/swiper/sp4.png'
import sp5Path from '../assets/swiper/sp5.png'
import sp6Path from '../assets/swiper/sp6.png'
import sp7Path from '../assets/swiper/sp7.png'
import sp8Path from '../assets/swiper/sp8.png'
import sp9Path from '../assets/swiper/sp9.png'
import sp10Path from '../assets/swiper/sp10.png'
const images = [
  sp1Path, sp2Path, sp3Path, sp4Path, sp5Path, sp6Path, sp7Path, sp8Path, sp9Path, sp10Path,
]
// const images = [
  // 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  // 'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
// ];

const store = useStore()


</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p3.png' @click="store.nextPageIndex">
    <div class='text-header'>
      <p>创建全国文明典范城市，</p>
      <p>需要每一位市民的参与！</p>
      <p>让我们一起践行</p>
      <p>"文明典范·你我共创" 公约吧！</p>
    </div>
    <div class='swiper-container'>
      <van-swipe class="my-swipe" style="width: 16rem;" :autoplay="3000" lazy-render indicator-color="white">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      </div>
  </div>
</template>

<style lang='scss' scoped>
.container {
  min-width: 360px;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  padding: 0;
  .background {
    min-width: 360px;
    min-height: 100vh;
    width: 100vw;
    position: absolute;
  }
  .text-header{
    min-width: 216px;
    width: 60vw;
    font-size: 0.8rem;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    top: 9.3rem;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (min-width: 390px) {
      top: 9rem;
    }
    @media screen and (min-width: 400px) {
      top: 9.2rem;
    }
    @media screen and (min-width: 450px) {
      top: 10rem;
    }
    @media screen and (min-width: 500px) {
      top: 9rem;
    }
    @media screen and (min-width: 550px) {
      top: 10rem;
    }
    @media screen and (min-width: 600px) {
      top: 9.3rem;
    }
    @media screen and (min-width: 700px) {
      top: 8.6rem;
    }
    @media screen and (min-width: 800px) {
      top: 9.2rem;
    }
  }

  .swiper-container {
    min-width: 252px;
    width: 16rem;
    top: 20rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    @media screen and (min-width: 390px) {
      top: 19rem;
    }
    @media screen and (min-width: 400px) {
      top: 20.5rem;
    }
    @media screen and (min-width: 450px) {
      top: 23rem;
    }

    @media screen and (min-width: 500px) {
      top: 20rem;
    }
    @media screen and (min-width: 550px) {
      top: 23rem;
    }
    @media screen and (min-width: 600px) {
      top: 19rem;
    }
    @media screen and (min-width: 700px) {
      top: 19rem;
    }
    @media screen and (min-width: 800px) {
      top: 20rem;
    }


  }
  .my-swipe .van-swipe-item {
    width: 16rem;
    img {
      width: 16rem;
    }
    color: #fff;
    text-align: center;
    //background-color: #39a9ed;
  }
}

</style>
