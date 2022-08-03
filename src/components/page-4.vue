<script setup>
defineProps({
  msg: {
    type: String,
    default: 'msg'
  },
});
</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p4.png'>
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
