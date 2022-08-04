<script setup>
import { useStore } from '../stores/pageIndex';

defineProps({
  msg: {
    type: String,
    default: 'msg'
  },
});
const store = useStore()
</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p4.png' @click="store.firstPageIndex">
    <div class='turntable-container'>
      <img class='img1' src='src/assets/turntable.jpg'/>
    </div>
    <div class='pointer-container'>
      <img class='img2' src='src/assets/pointer.jpg'/>
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
  .img1{
    max-width: 100%;
    max-height: 100%;
    width: 18rem;
    display: block;
    margin: 0 auto;
  }
  .img2{
    max-width: 100%;
    max-height: 100%;
    width: 5.2rem;
    display: block;
    margin: 0 auto;
  }

}
</style>
