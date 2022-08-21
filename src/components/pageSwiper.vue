<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<script setup>
import { Autoplay, Pagination, Navigation } from "swiper";
const images = [
  'https://bucket.taurus.cd.peanut996.cn/img/sp1.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp2.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp3.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp4.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp5.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp6.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp7.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp8.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp9.png',
  'https://bucket.taurus.cd.peanut996.cn/img/sp10.png',
];
</script>

<template>
  <div class='container'>
    <div class="swiper-container">
      <swiper
        :space-between="0"
        :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
      '--swiper-navigation-size' : '2rem'
    }"
        :loop="true"
        :pagination="{
      clickable: true,
      dynamicBullets: true,
    }"
        :centeredSlides="true"
        :autoplay="{
      delay: 2500,
    }"
        :navigation="true"
        :modules="[Autoplay, Pagination, Navigation]"
        @swiper="onSwiper"
      >
        <swiper-slide
          v-for="image in images" :key="image"
        ><img :src="image" /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
}
  .swiper-container {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;

    .arrow-icon-container {
      position: absolute;
      width: 100%;
      top: 50%;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

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

  .slide-container {
    min-width: 295.2px;
    width: 82vw;
    font-size: 0.8rem;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    top: 52rem;
    left: 50%;
    transform: translateX(-50%);
    p {
      text-align: center;
    }
    @media screen and (min-width: 370px) {
      top: 54rem;
    }
    @media screen and (min-width: 390px) {
      top: 49.5rem;
    }
    @media screen and (min-width: 400px) {
      top: 51rem;
    }
    @media screen and (min-width: 410px) {
      top: 53rem;
    }
    @media screen and (min-width: 450px) {
      top: 57rem;
    }
    @media screen and (min-width: 470px) {
      top: 60rem;
    }
    @media screen and (min-width: 500px) {
      top: 53rem;
    }
    @media screen and (min-width: 530px) {
      top: 57rem;
    }
    @media screen and (min-width: 550px) {
      top: 58rem;
    }
    @media screen and (min-width: 580px) {
      top: 62rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 0.7rem;
      top: 50rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 0.6rem;
      top: 52rem;
    }
    @media screen and (min-width: 750px) {
      top: 50rem;
    }
    @media screen and (min-width: 800px) {
      top: 52rem;
    }
  }

  .sign-button {
    width: 40vw;
    background: #ccdbf5;
    padding: 0.4rem;
    font-size: 1.1rem;
    font-weight: 800;
    border-radius: 1.2rem;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 1.5px 1.8px 0 1px #9fb8e8;
  }
  .signed-container {
    min-width: 295.2px;
    width: 82vw;
    font-size: 0.8rem;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    top: 58rem;
    left: 50%;
    transform: translateX(-50%);
    p {
      text-align: center;
      span {
        color: #cb7c39;
        font-weight: 800;
        font-size: 1rem;
      }
    }
    @media screen and (min-width: 370px) {
      top: 60rem;
    }
    @media screen and (min-width: 390px) {
      top: 55rem;
    }
    @media screen and (min-width: 400px) {
      top: 57rem;
    }
    @media screen and (min-width: 410px) {
      top: 58rem;
    }
    @media screen and (min-width: 450px) {
      top: 63rem;
    }
    @media screen and (min-width: 470px) {
      top: 66rem;
    }
    @media screen and (min-width: 500px) {
      top: 58rem;
    }
    @media screen and (min-width: 530px) {
      top: 61rem;
    }
    @media screen and (min-width: 550px) {
      top: 60rem;
    }
    @media screen and (min-width: 580px) {
      top: 62rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 0.7rem;
      top: 55rem;
      span {
        font-size: 0.8rem;
      }
    }
    @media screen and (min-width: 700px) {
      font-size: 0.6rem;
      top: 55rem;
      span {
        font-size: 0.7rem;
      }
    }
    @media screen and (min-width: 750px) {
      top: 55rem;
    }
    @media screen and (min-width: 800px) {
      top: 58rem;
    }
  }

</style>
