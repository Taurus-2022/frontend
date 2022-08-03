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
    <img class='background' src='/src/assets/p3.png' @click="store.nextPageIndex">
    <div class='text-header'>
      <p>创建全国文明典范城市，</p>
      <p>需要每一位市民的参与！</p>
      <p>让我们一起践行</p>
      <p>"文明典范·你我共创" 公约吧！</p>
    </div>
    <van-swipe
class="my-swipe" style="width: 70vw; top: 50%; left: 50%;
    transform: translateX(-50%);" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
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
  .text-header{
    width: 60vw;
    font-size: 1rem;
    position: absolute;
    text-align: center;
    top: 21%;
    left: 50%;
    transform: translateX(-50%);
  }

  .my-swipe .van-swipe-item {
    width: 60vw;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}

</style>
