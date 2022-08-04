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

const images = [
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp1.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp2.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp3.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp4.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp5.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp6.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp7.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp8.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp9.png',
  'https://taurus-1313105072.cos.ap-chengdu.myqcloud.com/img/sp10.png',
];

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
    <div class='sign-text-container'>

    </div>
    <div class='sign-button'></div>
    <div class='signed-container'></div>
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
    top: 22rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    @media screen and (min-width: 390px) {
      top: 20rem;
    }
    @media screen and (min-width: 400px) {
      top: 21rem;
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
      height: 24rem;
    }
    color: #fff;
    text-align: center;
  }
}

</style>
