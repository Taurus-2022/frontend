<script setup>
import { useStore } from '../stores/pageIndex';
import { ref } from 'vue';

const store = useStore()
const startLottery = ref(false);
const start = () => {
  startLottery.value = true
}
</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p4.png' @click="store.firstPageIndex">
    <div class='turntable-container'>
      <img :class='["turntable", startLottery ? "rotateImages": ""]' src='/src/assets/turntable.jpg'/>
    </div>
    <div class='pointer-container'>
      <img class='pointer' src='/src/assets/pointer.jpg' @click='start'/>
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
  .turntable-container{
    position: relative;
    min-width: 360px;
    top: 11rem;
  }
  .pointer-container{
    position: relative;
    min-width: 360px;
    top:-2rem;
  }
  .turntable{
    max-width: 100%;
    max-height: 100%;
    width: 18rem;
    display: block;
    margin: 0 auto;
  }
  .pointer{
    max-width: 100%;
    max-height: 100%;
    width: 5.2rem;
    display: block;
    margin: 0 auto;
  }
  .rotateImages{
    -webkit-animation:myRotate 3s linear infinite;
    animation:myRotate 3s linear infinite;
  }
  @-webkit-keyframes myRotate{
    0%{ -webkit-transform: rotate(0deg);}
    50%{ -webkit-transform: rotate(180deg);}
    100%{ -webkit-transform: rotate(360deg);}
  }
  @keyframes myRotate{
    0%{ -webkit-transform: rotate(0deg);}
    50%{ -webkit-transform: rotate(180deg);}
    100%{ -webkit-transform: rotate(360deg);}
  }
}
</style>
