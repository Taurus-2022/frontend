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
}

</style>
