<script setup>
import { useStore } from '../stores/pageIndex';
const store = useStore();

const nextPage = () => {
  store.nextPageIndex();
};
</script>

<template>
  <div id="page1" v-touch:swipeup="nextPage" class="container">
    <img class="logo" src="/src/assets/p1-logo.png" />
    <img class="title" src="/src/assets/p1-title-cloud.png" />
    <img class="bird" src="/src/assets/p1-bird.png" />
    <img class="background" src="/src/assets/p1-background.png" />
    <div class="slide-container">
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
  width: 100vw;
  padding: 0;
  background: rgb(7, 153, 201);
  background: linear-gradient(0deg, rgba(7, 153, 201, 1) 0%, rgba(204, 219, 245, 1) 65%, rgba(204, 219, 245, 1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  .logo {
    margin-top: 10%;
    width: 25%;
    display: block;
  }
  .title {
    width: 85%;
    display: block;
  }
  .background {
    width: 100vw;
  }
  .bird {
    display: block;
    position: absolute;
    width: 20%;
    right: 12%;
    top: 45%;
  }
}
.slide-container {
  min-width: 295.2px;
  width: 82vw;
  font-size: 1.2rem;
  line-height: 1.5;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }

  @media screen and (min-width: 400px) {
    top: 50%;
  }
  @media screen and (min-width: 410px) {
    top: 55%;
  }
  @media screen and (min-width: 450px) {
    top: 55%;
  }
  @media screen and (min-width: 600px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 700px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 800px) {
    top: 55%;
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
</style>
