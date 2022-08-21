<script>
import { Swipe, SwipeItem } from 'vant';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    Swiper,
    SwiperSlide,
  },
};
</script>
<script setup>
import { useStore } from '../stores/pageIndex';
import { onMounted, ref } from 'vue';
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

const store = useStore();
const sign = ref(false);
function userSign() {
  sign.value = true;
}
// const mySwiper = ref(null);
// const onSwiper = (swiper) => {
//   mySwiper.value = swiper;
// }
onMounted(() => {
  // console.log(mySwiper);
  // mySwiper.value.autoplay.start()
})
</script>

<template>
  <div class="container">
    <img :class="['background', 'page-png']" src="/src/assets/p3.png" />
    <div class="text-header">
      <p>创建全国文明典范城市，</p>
      <p>需要每一位市民的参与！</p>
      <p>让我们一起践行</p>
      <p>"文明典范·你我共创" 公约吧！</p>
    </div>
<!--    <swiper-->
<!--      v-if="store.currentPageIndex === 4"-->
<!--      :space-between="0"-->
<!--      :style="{-->
<!--      '&#45;&#45;swiper-navigation-color': '#fff',-->
<!--      '&#45;&#45;swiper-pagination-color': '#fff',-->
<!--      '&#45;&#45;swiper-navigation-size' : '2rem'-->
<!--    }"-->
<!--      :loop="true"-->
<!--      :pagination="{-->
<!--      clickable: true,-->
<!--      dynamicBullets: true,-->
<!--    }"-->
<!--      :centeredSlides="true"-->
<!--      :autoplay="{-->
<!--      delay: 2500,-->
<!--    }"-->
<!--      :navigation="true"-->
<!--      :modules="[Autoplay, Pagination, Navigation]"-->
<!--      @swiper="onSwiper"-->
<!--    >-->
<!--      <swiper-slide-->
<!--        v-for="image in images" :key="image"-->
<!--      ><img :src="image" /></swiper-slide>-->
<!--    </swiper>-->
    <div class="swiper-container" v-if='store.currentPageIndex === 4'>
<!--      <swiper-->
<!--              :space-between="0"-->
<!--              :style="{-->
<!--              '&#45;&#45;swiper-navigation-color': '#fff',-->
<!--              '&#45;&#45;swiper-pagination-color': '#fff',-->
<!--              '&#45;&#45;swiper-navigation-size' : '2rem'-->
<!--            }"-->
<!--              :loop="true"-->
<!--              :pagination="{-->
<!--              clickable: true,-->
<!--              dynamicBullets: true,-->
<!--            }"-->
<!--              :centeredSlides="true"-->
<!--              :autoplay="{-->
<!--              delay: 2500,-->
<!--            }"-->
<!--              :navigation="true"-->
<!--              :modules="[Autoplay, Pagination, Navigation]"-->
<!--              @swiper="onSwiper"-->
<!--            >-->
<!--              <swiper-slide-->
<!--                v-for="image in images" :key="image"-->
<!--              ><img :src="image" /></swiper-slide>-->
<!--            </swiper>-->
      <van-swipe class="my-swipe" style="width: 16rem" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
      <div class="arrow-icon-container">
        <van-icon name="arrow-left" size="2rem" />
        <van-icon name="arrow" size="2rem" />
      </div>
    </div>
    <div class="slide-container">
      <p>创建文明典范城市是一场没有终点的幸福接力，</p>
      <p>它渗透于城市发展中、融合在市井生活里，</p>
      <p>让我们诗意栖居的家园永葆生命力、充满感召力。</p>
    </div>
    <Transition name="fade">
      <div v-show="sign === false" class="signed-container">
        <div class="sign-button" @click="userSign">点击签名</div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-show="sign === true" class="signed-container">
        <p>
          你已成为第
          <span>00000000</span>
          位
        </p>
        <p>支持金牛区创建全国文明典范城市的人！</p>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
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

  .text-header {
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
      font-size: 0.7rem;
      top: 9.3rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 0.6rem;
      top: 9rem;
    }
    @media screen and (min-width: 800px) {
      top: 9.2rem;
    }
  }

  .swiper-container {
    position: relative;
    min-width: 252px;
    width: 16rem;
    top: 22rem;
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
}

.fade-enter-active {
  transition-delay: 0.6s;
  transition-property: opacity;
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave-leave {
  opacity: 1;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
