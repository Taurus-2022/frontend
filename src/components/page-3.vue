<script>
import { Swipe, SwipeItem } from 'vant';

export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
};
</script>
<script setup>
import { useStore } from '../stores/store';
import { onMounted, ref } from 'vue';
import { baseUrl } from '../constant';
import { Dialog } from 'vant';
import { inject } from 'vue';

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

const axios = inject('axios');
const store = useStore();
const isSigned = ref(false);
const signedNumber = ref();
onMounted(() => {
  axios
    .get(baseUrl + 'signatures/count', {
      timeout: 5000,
      withCredentials: true,
    })
    .then((response) => {
      if (response.status === 200 && response.data) {
        signedNumber.value = response.data.count;
      }
    })
    .catch(() => {
      signedNumber.value = 20000;
    });
});
const userSign = () => {
  const instance = axios.create({
    timeout: 5000,
    withCredentials: true,
  });

  instance
    .post(baseUrl + 'signatures', {
      street: store.currentUserStreetInfo,
    })
    .then((response) => {
      if (response.status === 200) {
        axios
          .get(baseUrl + 'signatures/count', {
            timeout: 5000,
            withCredentials: true,
          })
          .then((response) => {
            if (response.status === 200 && response.data) {
              signedNumber.value = response.data.count;
              isSigned.value = true;
              store.setCurrentUserIsSignedToday(true);
            }
          })
          .catch(() => {
            signedNumber.value = 20000;
            isSigned.value = true;
          });
      }
    })
    .catch((e) => {
      console.log(e);
      Dialog.alert({
        message: '当前网络状况不佳，请稍后重试',
      }).then(() => {});
    });
};
</script>

<template>
  <div class="container">
    <img :class="['background', 'page-png']" src="https://bucket.taurus.cd.peanut996.cn/img/p3.png" />
    <div class="text-header">
      <p>创建全国文明典范城市，</p>
      <p>需要每一位市民的参与！</p>
      <p>让我们一起践行</p>
      <p>"文明典范·共建共享" 公约吧！</p>
    </div>
    <div v-if="store.currentPageIndex === 4" class="swiper-container">
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
    <Transition name="fade">
      <div v-show="!store.currentUserIsSignedToday && isSigned === false" class="signed-container">
        <div class="sign-button" @click="userSign">点击签名</div>
      </div>
    </Transition>
    <Transition name="fade">
      <div v-show="store.currentUserIsSignedToday && isSigned === true" class="signed-container">
        <p>
          您是第
          <span>{{ signedNumber }}</span>
          位
        </p>
        <p>参与成都市创建全国文明典范城市的市民！</p>
        <p>感谢您的参与！</p>
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
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    @media screen and (min-width: 370px) {
      top: 24%;
    }
    @media screen and (min-width: 390px) {
      top: 19%;
    }
    @media screen and (min-width: 400px) {
      top: 19%;
    }
    @media screen and (min-width: 450px) {
      top: 19%;
    }
    @media screen and (min-width: 500px) {
      top: 19%;
    }
    @media screen and (min-width: 550px) {
      top: 19%;
    }
    @media screen and (min-width: 600px) {
      font-size: 0.7rem;
      top: 9.3rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 0.6rem;
      top: 32%;
    }
    @media screen and (min-width: 800px) {
      top: 30%;
    }
    @media screen and (min-width: 1000px) {
      top: 35%;
    }
  }

  .swiper-container {
    position: relative;
    min-width: 252px;
    width: 16rem;
    top: 45%;
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
    @media screen and (min-width: 370px) {
      top: 52%;
    }
    @media screen and (min-width: 390px) {
      top: 43%;
    }
    @media screen and (min-width: 400px) {
      top: 43%;
    }
    @media screen and (min-width: 450px) {
      top: 43%;
    }

    @media screen and (min-width: 500px) {
      top: 52%;
    }
    @media screen and (min-width: 550px) {
      top: 52%;
    }
    @media screen and (min-width: 600px) {
      top: 52%;
    }
    @media screen and (min-width: 700px) {
      top: 70%;
    }
    @media screen and (min-width: 800px) {
      top: 69%;
    }
    @media screen and (min-width: 1000px) {
      top: 72%;
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
    top: 51rem;
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
      top: 53rem;
    }
    @media screen and (min-width: 390px) {
      top: 49.5rem;
    }
    @media screen and (min-width: 400px) {
      top: 50.5rem;
    }
    @media screen and (min-width: 410px) {
      top: 52rem;
    }
    @media screen and (min-width: 450px) {
      top: 52rem;
    }
    @media screen and (min-width: 470px) {
      top: 56rem;
    }
    @media screen and (min-width: 500px) {
      top: 56rem;
    }
    @media screen and (min-width: 530px) {
      top: 56rem;
    }
    @media screen and (min-width: 550px) {
      top: 56rem;
    }
    @media screen and (min-width: 580px) {
      top: 48rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 0.7rem;
      top: 48rem;
      span {
        font-size: 0.8rem;
      }
    }
    @media screen and (min-width: 700px) {
      font-size: 0.6rem;
      top: 53rem;
      span {
        font-size: 0.7rem;
      }
    }
    @media screen and (min-width: 750px) {
      top: 48rem;
    }
    @media screen and (min-width: 800px) {
      top: 52rem;
    }
    @media screen and (min-width: 900px) {
      top: 57.5rem;
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
